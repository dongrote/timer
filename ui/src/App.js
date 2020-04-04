import React, {Component} from 'react';
import io from 'socket.io-client';
import {Container} from 'semantic-ui-react';
import jwt from 'jsonwebtoken';
import TimerInterface from './TimerInterface';
import GuestInterface from './GuestInterface';
import LandingView from './LandingView';

class App extends Component {
  state = {
    jwt: null,
    timer: {
      target: null,
      elapsed: 0,
      running: false,
      lights: {red: false, yellow: false, green: false},
    }
  };

  setTimerState(state) {
    this.setState({timer: state});
  }

  decodeJsonWebToken() {
    const cookieOffset = document.cookie.indexOf('jwt=');
    if (cookieOffset === -1) {
      return null;
    }
    const end = document.cookie.slice(cookieOffset).indexOf(';');
    const signed = document.cookie.slice(cookieOffset + 4, end - 4),
      decoded = jwt.decode(signed);
    return decoded;
  }

  loadJsonWebToken() {
    this.setState({jwt: this.decodeJsonWebToken()})
  }

  componentDidMount() {
    this.loadJsonWebToken();
    this.io = io();
    this.io.on('timer-state', state => this.setTimerState(state));
    this.fetchState();
  }

  async fetchState() {
    var res = await fetch('/api/timer');
    if (res.ok) {
      var body = await res.json();
      this.setTimerState(body);
    }
  }

  joinRoom() {
    this.loadJsonWebToken();
    this.fetchState();
  }

  render() {
    return this.state.jwt
      ? (
          <Container fluid>
            {this.state.jwt.timer
              ? <TimerInterface
                  timerState={this.state.timer}
                  roomId={this.state.jwt.room}
                />
              : <GuestInterface
                  timerState={this.state.timer}
                  roomId={this.state.jwt.room}
                />}
          </Container>
        )
      : <LandingView setRoom={() => this.joinRoom()} />;
  }
}

export default App;

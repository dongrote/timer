import React, {Component} from 'react';
import io from 'socket.io-client';
import {Container} from 'semantic-ui-react';
import jwt from 'jsonwebtoken';
import TimerInterface from './TimerInterface';
import GuestInterface from './GuestInterface';
import LandingView from './LandingView';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jwt: null,
      roomId: null,
      socket: null,
      timer: null,
      socket: io(`/socket.io`)
    };
    console.log(this.state);
    this.state.socket.on('timer-state', state => {
      this.setState({timer: state});
      console.log('timer-state', state);
    });
  }

  configureTimer(configuration) {
    this.setState({configuration});
  }

  loadJsonWebToken() {
    const cookieOffset = document.cookie.indexOf('jwt=');
    if (cookieOffset === -1) {
      return;
    }
    const end = document.cookie.slice(cookieOffset).indexOf(';');
    const signed = document.cookie.slice(cookieOffset + 4, end - 4),
      decoded = jwt.decode(signed);
    this.setState({jwt: decoded});
    return decoded;
  }

  componentDidMount() {
    this.loadJsonWebToken();
  }

  joinRoom() {
    this.loadJsonWebToken();
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

  /*
  render() {
    return this.state.jwt
      ? (
        <Container fluid>
          <TimerHeader configureMode={this.state.configure} onConfigureClick={() => this.setState({configure: true})}/>
          {this.state.configure
            ? <Configure configure={c => this.configureTimer(c)}/>
            : <TrafficLight red={this.state.red} yellow={this.state.yellow} green={this.state.green} />}
          <TimeLog />
          <p>{JSON.stringify(this.state.jwt)}</p>
        </Container>
        )
      : <LandingView setRoom={id => this.joinRoom(id)}/>;
  }
  */
}

export default App;

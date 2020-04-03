import React, {Component} from 'react';
import {Container, Segment} from 'semantic-ui-react';
import jwt from 'jsonwebtoken';
import TrafficLight from './TrafficLight';
import TimerHeader from './TimerHeader';
import TimeLog from './TimeLog';
import Configure from './Configure';
import TimerInterface from './TimerInterface';
import GuestInterface from './GuestInterface';
import LandingView from './LandingView';

class App extends Component {
  state = {
    jwt: null,
    roomId: null,
  };

  configureTimer(configuration) {
    this.setState({configuration});
  }

  loadJsonWebToken() {
    const cookieOffset = document.cookie.indexOf('jwt=');
    if (cookieOffset === -1) {
      return;
    }
    const end = document.cookie.slice(cookieOffset).indexOf(';');
    const signed = document.cookie.slice(cookieOffset + 4, end - 4);
    this.setState({jwt: jwt.decode(signed)});
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
            {this.state.jwt.timer ? <TimerInterface roomId={this.state.jwt.room} /> : <GuestInterface roomId={this.state.jwt.room} />}
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

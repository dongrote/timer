import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import TrafficLight from './TrafficLight';
import TimerHeader from './TimerHeader';
import TimeLog from './TimeLog';
import Configure from './Configure';

class App extends Component {
  state = {
    red: {on: false},
    yellow: {on: false},
    green: {on: false},
    configure: true,
    configuration: {},
  };
  timeStep() {
    this.setState({
      red: {on: Math.random() > 0.5},
      yellow: {on: Math.random() > 0.5},
      green: {on: Math.random() > 0.5},
    });
    setTimeout(() => this.timeStep(), 1000);
  }

  configureTimer(configuration) {
    this.setState({configuration});
  }

  componentDidMount() {
    setTimeout(() => this.timeStep(), 0);
  }

  render() {
    return (
      <Container fluid>
        <TimerHeader configureMode={this.state.configure} onConfigureClick={() => this.setState({configure: true})}/>
        {this.state.configure
          ? <Configure configure={c => this.configureTimer(c)}/>
          : <TrafficLight red={this.state.red} yellow={this.state.yellow} green={this.state.green} />}
        <TimeLog />
      </Container>
    );
  }
}

export default App;

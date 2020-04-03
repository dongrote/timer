import React, {Component} from 'react';
import {Segment, Header, Label} from 'semantic-ui-react';
import QRCode from './QRCode';
import TimeInput from './TimeInput';
import Stopwatch from './Stopwatch';

class TimerInterface extends Component {
  state = {time: 0, running: false};
  async onSet(time) {
    await fetch(`/api/timer?action=configure&time=${encodeURIComponent(time)}`);
    this.setState({time});
  }

  async onStart() {
    await fetch(`/api/timer?action=start`);
    this.setState({running: true});
  }

  async onStop() {
    await fetch(`/api/timer?action=stop`);
    this.setState({running: false});
  }

  async onReset() {
    await fetch(`/api/timer?action=reset`);
    this.setState({running: false, time: 0});
  }

  render() {
    return (
      <Segment>
        <Header>Timer Interface</Header>
        <Label>Room ID {this.props.roomId}</Label>
        <QRCode roomId={this.props.roomId} />
        <TimeInput onSubmit={time => this.onSet(time)} />
        <Stopwatch
          time={this.props.timerState && this.props.timerState.elapsed}
          running={this.props.timerState && this.props.timerState.running}
          onStart={() => this.onStart()}
          onStop={() => this.onStop()}
          onReset={() => this.onReset()}
        />
      </Segment>
    );
  }
}

export default TimerInterface;

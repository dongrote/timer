import React, {Component} from 'react';
import {Segment, Step, Icon} from 'semantic-ui-react';
import SpeakerInput from './SpeakerInput';
import TimeInput from './TimeInput';
import TrafficLightController from './TrafficLightController';

class Configure extends Component {
  state = {step: 'speaker', runIcon: 'play', elapsedSeconds: 0};

  onSpeakerSubmit(name) {
    this.setState({
      speakerName: name,
      step: 'time',
    });
  }

  secondsToString(time) {
    const seconds = time % 60,
      secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`,
      minutes = Math.floor(time / 60),
      minutesString = `${minutes}`;
    return `${minutesString}:${secondsString}`;
  }

  updateElapsedTime(elapsedSeconds) {
    this.setState({
      elapsedSeconds,
      elapsedTimestring: this.secondsToString(elapsedSeconds),
    });
  }

  onTimeSubmit(time) {
    const timeString = this.secondsToString(time);
    this.setState({
      time,
      timeString,
      elapsedTimestring: '--:--',
      step: 'run',
    });
  }

  start() {
    this.setState({
      running: true,
      runIcon: 'pause',
    });
  }

  stop() {
    this.setState({
      running: false,
      runIcon: 'play',
    });
  }

  timeStep() {
    if (this.state.running) {
      this.updateElapsedTime(this.state.elapsedSeconds + 1);
    }
    setTimeout(() => this.timeStep(), 1000);
  }

  componentDidMount() {
    this.timeStep();
  }

  render() {
    return (
      <Segment basic>
        <Step.Group fluid attached='top'>
          <Step active={this.state.step === 'speaker'} completed={Boolean(this.state.speakerName)}>
            <Icon name='user' />
            <Step.Content>
              <Step.Title>Speaker</Step.Title>
              <Step.Description>{this.state.speakerName || `Set the speaker's name`}</Step.Description>
            </Step.Content>
          </Step>
          <Step active={this.state.step === 'time'} completed={Boolean(this.state.time)}>
            <Icon name='clock' />
            <Step.Content>
              <Step.Title>Time</Step.Title>
              <Step.Description>{this.state.timeString ? `${this.state.elapsedTimestring} / ${this.state.timeString}` : `Set the target time`}</Step.Description>
            </Step.Content>
          </Step>
          <Step active={this.state.step === 'run'} onClick={() => this.state.running ? this.stop() : this.start()}>
            <Icon name={this.state.runIcon} />
            <Step.Content>
              <Step.Title>{this.state.running ? 'Pause' : 'Start'}</Step.Title>
              <Step.Content>{this.state.running ? 'Pause' : 'Start'} the timer</Step.Content>
            </Step.Content>
          </Step>
        </Step.Group>
        <Segment attached>
          {this.state.step === 'speaker' && <SpeakerInput onSubmit={name => this.onSpeakerSubmit(name)}/>}
          {this.state.step === 'time' && <TimeInput onSubmit={time => this.onTimeSubmit(time)} />}
          {this.state.step === 'run' && <TrafficLightController elapsedSeconds={this.state.elapsedSeconds} requestedTime={this.state.time} />}
        </Segment>
      </Segment>
    );
  }
}

export default Configure;

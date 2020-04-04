import React from 'react';
import {Container, Header, Label} from 'semantic-ui-react';
import QRCode from './QRCode';
import TimeInput from './TimeInput';
import Stopwatch from './Stopwatch';

const lightString = lights => {
  if (!lights) return 'off';
  if (lights.red) return 'red';
  if (lights.yellow) return 'yellow';
  if (lights.green) return 'green';
  return 'off';
}

const onSet = time => fetch(`/api/timer?action=configure&time=${encodeURIComponent(time)}`);
const onStart = () => fetch(`/api/timer?action=start`);
const onStop = () => fetch(`/api/timer?action=stop`);
const onReset = () => fetch(`/api/timer?action=reset`);

export default props => (
  <Container text>
    <Header>Timer Interface</Header>
    <Label>Room ID {props.roomId}</Label>
    <QRCode roomId={props.roomId} />
    <TimeInput onSubmit={time => onSet(time)} />
    <Stopwatch
      target={props.timerState.target}
      elapsed={props.timerState.elapsed}
      running={props.timerState.running}
      light={lightString(props.timerState.lights)}
      onStart={() => onStart()}
      onStop={() => onStop()}
      onReset={() => onReset()}
    />
  </Container>
);

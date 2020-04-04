import React from 'react';
import {Segment, Button, Input, Icon} from 'semantic-ui-react';

const timeString = time => {
  const seconds = time % 60,
    secondsString = seconds > 9 ? `${seconds}` : `0${seconds}`,
    minutes = Math.floor(time / 60);
  return `${minutes}:${secondsString}`;
};

export default props => (
  <Segment>
    <Input action iconPosition='left'>
      <Icon name='clock' />
      <input value={timeString(props.time)} />
      <Button primary onClick={() => props.running ? props.onStop() : props.onStart()}>{props.running ? 'Stop' : 'Start'}</Button>
      <Button secondary onClick={() => props.onReset()}>Reset</Button>
    </Input>
  </Segment>
);

import React from 'react';
import {Segment, Button, Label, Input, Icon, Grid} from 'semantic-ui-react';

const timeString = time => {
  if (isNaN(time)) return '-:--';
  const seconds = time % 60,
    secondsString = seconds > 9 ? `${seconds}` : `0${seconds}`,
    minutes = Math.floor(time / 60);
  return `${minutes}:${secondsString}`;
};

export default props => (
  <Segment>
    <Grid textAlign='center'>
      <Grid.Row textAlign='center'>
        <Input action iconPosition='left'>
          <Icon name='clock' />
          <input value={`${timeString(props.elapsed)} / ${timeString(props.target)}`} />
          <Button disabled={!props.target} negative={props.running} positive={!props.running} onClick={() => props.running ? props.onStop() : props.onStart()}>
            <Icon name={props.running ? 'pause' : 'play'} />
            {props.running ? 'Stop' : 'Start'}
          </Button>
        </Input>
      </Grid.Row>
      <Grid.Row textAlign='center'>
        <Button disabled={!props.target || props.running} negative onClick={() => props.onReset()}>Reset</Button>
        <Button
          as='div'
          labelPosition='left'
        >
          <Label basic pointing='right'>Light</Label>
          <Button color={props.light === 'off' ? 'secondary' : props.light}>
            {props.light}
          </Button>
        </Button>
      </Grid.Row>
    </Grid>
  </Segment>
);

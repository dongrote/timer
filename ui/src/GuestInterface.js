import React from 'react';
import {Segment, Header} from 'semantic-ui-react';
import TrafficLight from './TrafficLight';

export default props => (
  <Segment>
    <Header>{props.roomId}</Header>
    <TrafficLight
      red={props.timerState.lights.red}
      yellow={props.timerState.lights.yellow}
      green={props.timerState.lights.green}
    />
  </Segment>
);

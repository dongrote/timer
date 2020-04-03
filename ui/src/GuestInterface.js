import React from 'react';
import {Segment, Header, List} from 'semantic-ui-react';

export default props => (
  <Segment>
    <Header>{props.roomId}</Header>
    <List>
      {props.timerState && Object.entries(props.timerState).map((k, v) => (
        <List.Item key={k}>{k}: {v}</List.Item>
      ))}
    </List>
  </Segment>
);

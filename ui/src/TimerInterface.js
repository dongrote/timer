import React from 'react';
import {Segment, Header, Label, Image} from 'semantic-ui-react';

export default props => (
  <Segment>
    <Header>Timer Interface</Header>
    <Label>Room ID {props.roomId}</Label>
    <Image src={`/api/joinqrcode?room=${encodeURIComponent(props.roomId)}`} bordered />
    Or send this link: <a href={`/api/join?room=${encodeURIComponent(props.roomId)}`}>here</a>
  </Segment>
);

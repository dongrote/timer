import React from 'react';
import {Segment, Header, Image} from 'semantic-ui-react';

export default props => (<Segment>
  <Header>Share this QR code with guests to join your timer session</Header>
  <Image
    bordered
    src={`/api/joinqrcode?room=${encodeURIComponent(props.roomId)}`}
    as='a'
    href={`/api/join?room=${encodeURIComponent(props.roomId)}`}
    target='_blank'
  />
  <p>
Or share this link: <a href={`/api/join?room=${encodeURIComponent(props.roomId)}`}>{`http://centricube.lan:3000/api/join?room=${encodeURIComponent(props.roomId)}`}</a>
  </p>
</Segment>);

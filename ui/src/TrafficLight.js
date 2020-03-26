import React from 'react';
import {Segment} from 'semantic-ui-react';
import TrafficLightBulb from './TrafficLightBulb';
import redlightOn from './images/red-on.png';
import redlightOff from './images/red-off.png';
import yellowlightOn from './images/yellow-on.png';
import yellowlightOff from './images/yellow-off.png';
import greenlightOn from './images/green-on.png';
import greenlightOff from './images/green-off.png';

export default props => (
  <Segment.Group basic style={{'background-color': '#ffcc66', 'max-width': '300px'}}>
    <TrafficLightBulb img={props.red ? redlightOn : redlightOff} />
    <TrafficLightBulb img={props.yellow ? yellowlightOn : yellowlightOff} />
    <TrafficLightBulb img={props.green ? greenlightOn : greenlightOff} />
  </Segment.Group>
);

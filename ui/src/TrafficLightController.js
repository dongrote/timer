import React from 'react';
import TrafficLight from './TrafficLight';

const shouldBeRed = (elapsed, requested) => elapsed >= requested;
const shouldBeYellow = (elapsed, requested) => {
  const remaining = requested - elapsed;
  if (remaining <= 0) {
    return false;
  }
  if (requested <= 180) {
    /* table topics or evaluation */
    return remaining <= 30;
  }
  return remaining <= 60;
};
const shouldBeGreen = (elapsed, requested) => {
  const remaining = requested - elapsed;
  if (remaining < 0) {
    return false;
  }
  if (requested <= 180) {
    /* table topics or evaluation*/
    return remaining > 30 && remaining <= 60;
  }
  /* general speaker */
  return remaining > 60 && remaining <= 120;
};

export default props => (
  <TrafficLight
    red={shouldBeRed(props.elapsedSeconds, props.requestedTime)}
    yellow={shouldBeYellow(props.elapsedSeconds, props.requestedTime)}
    green={shouldBeGreen(props.elapsedSeconds, props.requestedTime)}
  />
);

'use strict';

const red = (target, elapsed) => elapsed >= target;

const yellow = (target, elapsed) => {
  const remaining = target - elapsed;
  if (remaining <= 0) {
    return false;
  }
  if (target <= 180) {
    /* table topics or evaluation */
    return remaining <= 30;
  }
  return remaining <= 60;
};

const green = (target, elapsed) => {
  const remaining = target - elapsed;
  if (remaining < 0) {
    return false;
  }
  if (target <= 180) {
    /* table topics or evaluation*/
    return remaining > 30 && remaining <= 60;
  }
  /* general speaker */
  return remaining > 60 && remaining <= 120;
};

exports = module.exports = (timer, seconds) => {
  timer.elapsed += seconds;
  timer.lights.red = red(timer.target, timer.elapsed);
  timer.lights.yellow = yellow(timer.target, timer.elapsed);
  timer.lights.green = green(timer.target, timer.elapsed);
};

'use strict';
const _ = require('lodash'),
  timers = require('./timers');

exports = module.exports = id => _.get(timers, id, {
  target: null,
  elapsed: 0,
  lights: {
    red: false,
    yellow: false,
    green: false,
  },
  room: id,
});

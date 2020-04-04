'use strict';
const _ = require('lodash'),
  timers = require('./timers');

exports = module.exports = id => _.get(timers, id, {});

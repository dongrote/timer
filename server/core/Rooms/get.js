'use strict';
const _ = require('lodash'),
  rooms = require('./rooms'),
  log = require('debug-logger')('core:Rooms:get');

exports = module.exports = roomId => {
  log.debug(rooms);
  return _.get(rooms, roomId, null);
};

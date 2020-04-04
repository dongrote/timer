'use strict';
const {v4: uuidv4} = require('uuid'),
  rooms = require('./rooms'),
  log = require('debug-logger')('core:Rooms:create');

exports = module.exports = roomId => {
  const room = roomId || uuidv4();
  if (!rooms[room]) {
    log.debug('creating room', room);
    rooms[room] = {start: new Date()};
  }
  return Promise.resolve(room);
};

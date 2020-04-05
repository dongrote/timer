'use strict';
const availableRoomid = require('./availableRoomId'),
  rooms = require('./rooms'),
  log = require('debug-logger')('core:Rooms:create');



exports = module.exports = roomId => {
  const room = roomId || availableRoomid();
  if (!rooms[room]) {
    log.debug('creating room', room);
    rooms[room] = {start: new Date()};
  }
  return Promise.resolve(room);
};

'use strict';
const timers = require('./timers'),
  Clients = require('../Clients'),
  Rooms = require('../Rooms'),
  log = require('debug-logger')('core:Timer:stop');

exports = module.exports = (clientId, roomId) => {
  const timer = timers[roomId],
    io = Clients.get(clientId);
  log.debug('stopping timer', roomId);
  timer.running = false;
  Rooms.broadcast(io.server, roomId, 'timer-state', timer);
  return timer;
};

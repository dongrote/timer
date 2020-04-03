'use strict';
const timers = require('./timers'),
  Clients = require('../Clients'),
  log = require('debug-logger')('core:Timer:stop');

exports = module.exports = (clientId, roomId) => {
  const timer = timers[roomId],
    io = Clients.get(clientId);
  log.debug('stopping timer', roomId);
  timer.running = false;
  io.server.sockets.emit('timer-state', timer);
  return timer;
};

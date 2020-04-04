'use strict';
const timers = require('./timers'),
  Clients = require('../Clients'),
  Rooms = require('../Rooms'),
  step = require('./step'),
  log = require('debug-logger')('core:Timer:start');

exports = module.exports = (clientId, roomId) => {
  const timer = timers[roomId],
    io = Clients.get(clientId);
  log.debug('starting timer', roomId);
  timer.running = true;
  (function timeStep() {
    if (timer.running) {
      log.debug(`timer ${roomId} still running`);
      step(timer, 1);
      Rooms.broadcast(io.server, roomId, 'timer-state', timer);
      setTimeout(() => timeStep(), 1000);
    } 
  }());
  return timer;
};

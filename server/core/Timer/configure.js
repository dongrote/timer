'use strict';
const timers = require('./timers'),
  Clients = require('../Clients'),
  Rooms = require('../Rooms'),
  log = require('debug-logger')('core:Timer:configure');

exports = module.exports = (clientId, roomId, targetTime) => {
  timers[roomId] = {
    target: targetTime,
    elapsed: 0,
    running: false,
    id: roomId,
    lights: {
      red: false,
      yellow: false,
      green: false,
    }
  };
  const client = Clients.get(clientId);
  if (client) {
    Rooms.broadcast(client.server, roomId, 'timer-state', timers[roomId]);
  }
  return timers[roomId];
};

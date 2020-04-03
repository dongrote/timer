'use strict';
const timers = require('./timers'),
  Clients = require('../Clients');

exports = module.exports = (clientId, roomId, targetTime) => {
  timers[roomId] = {
    target: targetTime,
    elapsed: 0,
    running: false,
    id: roomId,
  };
  const client = Clients.get(clientId);
  if (client) {
    client.server.sockets.emit('timer-state', timers[roomId]);
  }
  return timers[roomId];
};

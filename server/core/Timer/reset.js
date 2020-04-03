'use strict';
const timers = require('./timers'),
  Clients = require('../Clients');

exports = module.exports = (clientId, roomId) => {
  const io = Clients.get(clientId);
  delete timers[roomId];
  io.server.sockets.emit('timer-state', null);
};

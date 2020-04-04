'use strict';
const timers = require('./timers'),
  Clients = require('../Clients'),
  Rooms = require('../Rooms');

exports = module.exports = (clientId, roomId) => {
  const io = Clients.get(clientId);
  delete timers[roomId];
  const resetTimer = {target: null, elapsed: 0, running: false, id: roomId, lights: {red: false, yellow: false, green: false}};
  Rooms.broadcast(io.server, roomId, 'timer-state', resetTimer);
  return resetTimer;
};

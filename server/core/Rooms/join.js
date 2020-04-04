'use strict';
const jwt = require('../jwt'),
  get = require('./get'),
  Clients = require('../Clients'),
  log = require('debug-logger')('core:Rooms:join');

exports = module.exports = (clientId, roomId) => {
  log.debug(`get('${roomId}')`, get(roomId));
  if (!get(roomId)) {
    return Promise.reject(new Error(`invalid room ${roomId}`));
  }
  return Clients.join(clientId, roomId);
};

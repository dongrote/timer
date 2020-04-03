'use strict';
const jwt = require('../jwt'),
  Clients = require('../Clients');

exports = module.exports = (clientId, roomId) => Clients.join(clientId, roomId)
  .then(() => jwt.sign({room: roomId, timer: false}));

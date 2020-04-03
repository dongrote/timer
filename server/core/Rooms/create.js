'use strict';
const {v4: uuidv4} = require('uuid'),
  Clients = require('../Clients'),
  jwt = require('../jwt');

exports = module.exports = (clientId, options) => {
  const room = uuidv4();
  return Clients.join(clientId, room)
    .then(() => jwt.sign({room: uuidv4(), timer: true}));
};

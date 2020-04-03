'use strict';
const clients = require('./clients'),
  log = require('debug-logger')('core:Clients:connect');

exports = module.exports = client => {
  log.debug('client disconnected', client.id);
  delete clients[client.id];
};

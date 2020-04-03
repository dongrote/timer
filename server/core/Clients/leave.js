'use strict';
const _ = require('lodash'),
  clients = require('./clients'),
  log = require('debug-logger')('core:Clients:leave');

exports = module.exports = (clientId, namespace) => new Promise((resolve, reject) => {
  const client = _.get(clients, clientId);
  log.debug(`Removing client ${clientId} from room ${namespace}`);
  return client
    ? client.leave(namespace, err => err ? reject(err) : resolve())
    : resolve();
});

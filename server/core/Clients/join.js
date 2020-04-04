'use strict';
const _ = require('lodash'),
  clients = require('./clients'),
  log = require('debug-logger')('core:Clients:join');

exports = module.exports = (clientId, namespace) => new Promise((resolve, reject) => {
  const client = _.get(clients, clientId);
  log.debug(`Adding client ${clientId} to room ${namespace}`);
  return client
    ? client.join(namespace, err => {
        if (err) {
          log.error(err);
          return reject(err);
        }
        log.debug(client.rooms);
        resolve();
      })
    : resolve();
});

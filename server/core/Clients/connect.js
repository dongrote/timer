'use strict';
const _ = require('lodash'),
  clients = require('./clients'),
  jwt = require('../jwt'),
  join = require('./join'),
  cookie = require('cookie'),
  log = require('debug-logger')('core:Clients:connect');

exports = module.exports = client => {
  log.debug('client connected', client.id);
  clients[client.id] = client;
  const cookies = cookie.parse(_.get(client, 'request.headers.cookie', ''));
  return cookies.jwt
    ? jwt.verify(cookies.jwt)
      .then(decoded => decoded.room && join(client.id, decoded.room))
      .catch(log.error)
    : null;
};

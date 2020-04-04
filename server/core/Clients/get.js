'use strict';
const _ = require('lodash'),
  clients = require('./clients');

exports = module.exports = id => _.get(clients, id, null);

'use strict';
const jwt = require('jsonwebtoken');

exports = module.exports = signed => jwt.decode(signed);

'use strict';
const jwt = require('jsonwebtoken');

/* return the expiration Date of the provided token */
exports = module.exports = signed => new Date(jwt.decode(signed).exp * 1000);

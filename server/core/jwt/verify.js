'use strict';
const env = require('../../env'),
  jwt = require('jsonwebtoken');

exports = module.exports = signed => new Promise((resolve, reject) => {
  jwt.verify(
    signed,
    env.jwtSecret(),
    {algorithms: [env.jwtAlgorithm()]},
    (err, decoded) => err ? reject(err) : resolve(decoded));
});

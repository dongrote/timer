'use strict';
const env = require('../../env'),
  jwt = require('jsonwebtoken');

exports = module.exports = payload => new Promise((resolve, reject) => {
  const options = {
    expiresIn: env.jwtExpiresIn(),
    algorithm: env.jwtAlgorithm(),
  };
  jwt.sign(payload, env.jwtSecret(), options, (err, signed) => err ? reject(err) : resolve(signed));
});

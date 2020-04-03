'use strict';
const _ = require('lodash'),
  core = require('../core');

exports = module.exports = (req, res, next) => core.jwt
  .verify(_.get(req.cookies, 'jwt'))
  .then(jwt => _.set(req, 'jwt', jwt))
  .then(() => next())
  .catch(err => next(_.set(err, 'statusCode', 401)));

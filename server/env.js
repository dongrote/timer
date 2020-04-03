'use strict';
const _ = require('lodash');

const sessionLifetimeValue = () => Number(_.get(process.env, 'SESSION_LIFETIME_VALUE', '3'));
const sessionLifetimeUnit = () => _.get(process.env, 'SESSION_LIFETIME_UNIT', 'h');

exports = module.exports = {
  sessionLifetimeValue,
  sessionLifetimeUnit,
  jwtSecret: () => _.get(process.env, 'JWT_SECRET', ''),
  jwtAlgorithm: () => _.get(process.env, 'JWT_ALGORITHM', 'HS256'),
  jwtExpiresIn: () => `${sessionLifetimeValue()}${sessionLifetimeUnit()}`,
  publicUrl: () => _.get(process.env, 'PUBLIC_URL'),
};

'use strict';
const _ = require('lodash'),
  core = require('../../core');

exports = module.exports = (req, res, next) => core.Rooms
  .join(_.get(req.cookies, 'io'), _.get(req.query, 'room', ''))
  .catch(err => Promise.reject(new HttpError(400, err.message)))
  .then(() => core.Rooms.createGuestToken(_.get(req.query, 'room')))
  .then(jwt => res
    .cookie('jwt', jwt, {expires: core.jwt.expires(jwt)})
    .redirect('/'))
  .catch(next);

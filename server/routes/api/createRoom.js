'use strict';
const _ = require('lodash'),
  core = require('../../core');

exports = module.exports = (req, res, next) => core.Rooms
  .create()
  .then(room => core.Rooms.join(_.get(req.cookies, 'io'), room)
    .then(() => core.Rooms.createTimerToken(room)))
  .then(jwt => res
    .cookie('jwt', jwt, {expires: core.jwt.expires(jwt)})
    .json({roomId: core.jwt.decode(jwt).room}))
  .catch(next);

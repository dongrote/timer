'use strict';
const core = require('../../core');

exports = module.exports = (req, res, next) => core.Rooms
  .create(req.cookies.io)
  .then(jwt => res
    .cookie('jwt', jwt, {expires: core.jwt.expires(jwt)})
    .json({roomId: core.jwt.decode(jwt).room}))
  .catch(next);

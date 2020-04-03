'use strict';
const _ = require('lodash'),
  HttpError = require('http-error-constructor'),
  core = require('../../core');

exports = module.exports = (req, res, next) => {
  const {jwt} = req,
    action = _.get(req.query, 'action');
  if (!action) {
    return next(new HttpError(400));
  }
  if (action === 'configure') {
    core.Timer.configure(req.cookies.io, jwt.room, Number(_.get(req.query, 'time', 0)))
    return res.sendStatus(204);
  }
  if (action === 'start') {
    core.Timer.start(req.cookies.io, jwt.room);
    return res.sendStatus(204);
  }
  if (action === 'stop') {
    core.Timer.stop(req.cookies.io, jwt.room);
    return res.sendStatus(204);
  }
  if (action === 'reset') {
    core.Timer.reset(req.cookies.io, jwt.room);
    return res.sendStatus(204);
  }
  return next(new HttpError(400, `invalid action: '${action}'`));
};

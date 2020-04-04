'use strict';
const _ = require('lodash'),
  HttpError = require('http-error-constructor'),
  core = require('../../core');

exports = module.exports = (req, res, next) => {
  const {jwt} = req,
    action = _.get(req.query, 'action');
  if (!action) {
    return res.json(core.Rooms.getTimer(jwt.room));
  }
  if (action === 'configure') {
    const state = core.Timer.configure(req.cookies.io, jwt.room, Number(_.get(req.query, 'time', 0)));
    return res.json(state);
  }
  if (action === 'start') {
    const state = core.Timer.start(req.cookies.io, jwt.room);
    return res.json(state);
  }
  if (action === 'stop') {
    const state = core.Timer.stop(req.cookies.io, jwt.room);
    return res.json(state);
  }
  if (action === 'reset') {
    const state = core.Timer.reset(req.cookies.io, jwt.room);
    return res.json(state);
  }
  return next(new HttpError(400, `invalid action: '${action}'`));
};

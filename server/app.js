'use strict';
const _ = require('lodash'),
  express = require('express'),
  cookieParser = require('cookie-parser'),
  logger = require('morgan'),
  log = require('debug-logger')('app'),
  router = require('./routes');

const app = express();

exports = module.exports = app;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', express.static('./public'));
app.use('/api', router);
app.use((req, res, next) => next(_.set(new Error('File Not Found'), 'statusCode', 404)));
app.use((err, req, res, next) => {
  log.error(err);
  res.status(_.get(err, 'statusCode', 500)).json({err});
});

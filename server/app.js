'use strict';
const express = require('express');
const app = express();
exports = module.exports = app;

const _ = require('lodash'),
  cookieParser = require('cookie-parser'),
  HttpError = require('http-error-constructor'),
  logger = require('morgan'),
  log = require('debug-logger')('app'),
  router = require('./routes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', express.static('./public'));
app.use('/api', router);
app.use((req, res, next) => next(new HttpError(404)));
app.use((err, req, res, next) => {
  log.error(err);
  res.status(_.get(err, 'statusCode', 500)).json({err});
});

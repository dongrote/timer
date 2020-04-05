'use strict';
const _ = require('lodash'),
  env = require('../../env'),
  url = require('url'),
  qrcode = require('qrcode');

exports = module.exports = (req, res, next) => {
  const room = _.get(req.query, 'room', ''),
    queryParams = new url.URLSearchParams({room});
  res
    .status(200)
    .set('Content-Type', 'image/png');
  qrcode.toFileStream(res, `${env.publicUrl()}/api/join?${queryParams.toString()}`, {
    errorCorrectionLevel: 'M',
    scale: 6,
  });
};

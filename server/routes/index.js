'use strict';
const router = require('express').Router();
exports = module.exports = router;
const api = require('./api'),
  log = require('debug-logger')('app:http');

router.get('/health', (req, res) => {
  log.debug('req.cookies %j', req.cookies);
  return res.sendStatus(200);
});
router.use(api);

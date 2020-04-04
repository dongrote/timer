'use strict';
const router = require('express').Router();
exports = module.exports = router;
const middleware = require('../../middleware'),
  joinRoom = require('./joinRoom'),
  joinRoomQRCode = require('./joinRoomQRCode'),
  joinViaLink = require('./joinViaLink'),
  timer = require('./timer'),
  createRoom = require('./createRoom');

router.get('/room', joinRoom);
router.post('/room', createRoom);
router.get('/joinqrcode', joinRoomQRCode);
router.get('/join', joinViaLink);
router.get('/timer', middleware.jwtVerify, timer);

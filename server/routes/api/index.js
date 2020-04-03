'use strict';
const router = require('express').Router();
exports = module.exports = router;
const joinRoom = require('./joinRoom'),
  joinRoomQRCode = require('./joinRoomQRCode'),
  joinViaLink = require('./joinViaLink'),
  createRoom = require('./createRoom');

router.get('/room', joinRoom);
router.post('/room', createRoom);
router.get('/joinqrcode', joinRoomQRCode);
router.get('/join', joinViaLink);

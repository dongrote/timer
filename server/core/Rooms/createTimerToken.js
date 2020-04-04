'use strict';
const jwt = require('../jwt');

exports = module.exports = roomId => jwt.sign({room: roomId, timer: true});

'use strict';
const _ = require('lodash'),
  rooms = require('./rooms');

const minRoomId = 0x10000,
  maxRoomId = 0xfffff,
  maxRoomCount = maxRoomId - minRoomId;

exports = module.exports = () => {
  let newRoomId;
  if (_.size(rooms) >= maxRoomCount) {
    throw new Error('no rooms available');
  }
  do {
    newRoomId = _.toUpper(_.random(minRoomId, maxRoomId).toString(16));
  } while(_.has(rooms, newRoomId));
  return newRoomId;
};

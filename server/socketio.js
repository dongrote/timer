'use strict';
const socketio = require('socket.io'),
  handlers = {},
  data = {};

function sio(server) {
  if (server) {
    data.io = socketio(server);
    Object.keys(handlers).forEach(e => {
      handlers[e].forEach(cb => {
        data.io.on(e, cb);
      });
    });
  }
  return data.io;
}

exports = module.exports = sio;

sio.on = (event, cb) => {
  if (data.io) {
    data.io.on(event, cb);
  } else {
    if (handlers[event]) {
      handlers[event].push(cb);
    } else {
      handlers[event] = [cb];
    }
  }
};

'use strict';

exports = module.exports = (server, roomId, event, message) => server.of('/').to(roomId).emit(event, message);

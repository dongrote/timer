'use strict';
exports = module.exports = {};
const path = require('path'),
  fs = require('fs');

fs.readdirSync(__dirname)
  .filter(fname => fname !== path.basename(__fname))
  .map(fname => path.basename(fname, '.js'))
  .forEach(fname => {
    exports[fname] = require(`./${fname}`);
  });

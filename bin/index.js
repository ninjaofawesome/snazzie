#! /usr/bin/env node

var initialize = require('./lib/snazzie.js');

module.exports.hello = function () {
  initialize();
};


'use strict';
var colors = require('colors')

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

function _wrapperLog(level, msg) {
  let arr = [colors[level]('[' + level.toString().toLocaleUpperCase() + '] ')];
  msg.length && msg.forEach((n) => {
    arr.push(colors[level](typeof n === 'object' || typeof n === 'string' && n ? n : JSON.stringify(n)));
  })
  console.log.apply(console, arr)
}

var Log = {
  debugMode: false,
  info: (...msg) => {
    _wrapperLog('info', msg);
  },
  warn: (...msg) => {
    _wrapperLog('warn', msg);
  },
  error: (...msg) => {
    _wrapperLog('error', msg);
  },
  err: (...msg) => {
    _wrapperLog('error', msg);
  },
  debug: (...msg) => {
    this.debugMode && _wrapperLog('debug', msg);
  },
  debugModeSwitch: (open) => {
    this.debugMode = open;
  }
}

module.exports = Log;
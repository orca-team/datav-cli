const path = require('path');
const fs = require('fs');
const ini = require('ini');
const debug = require('debug')('info');

let root;
if (process.platform === 'win32') {
  root = process.env.USERPROFILE || process.env.APPDATA || tmpdir;
} else {
  root = process.env.HOME || tmpdir;
}

const datavrcURL = path.join(root, '.datavrc');
if (fs.existsSync(datavrcURL)) {
  try {
    content = ini.parse(fs.readFileSync(datavrcURL, 'utf-8'));
  } catch (e) {
    debug(e.stack || e);
    content = {}
  }
} else {
  debug('has no .datavrc in ', datavrcURL);
  content = {};
}

module.exports = content;
const fs = require('fs');
const ini = require('ini');
const path = require('path');

let root;
if (process.platform === 'win32') {
  root = process.env.USERPROFILE || process.env.APPDATA || tmpdir;
} else {
  root = process.env.HOME || tmpdir;
}

const datavrcURL = path.join(root, '.datavrc');

module.exports = {
  isAbsPath: (p) => {
    if (process.platform.indexOf('win') === 0) {
      return /^\w:/.test(p);
    } else {
      return /^\//.test(p);
    }
  },
  isNone: (v) => {
    return v === undefined;
  },
  randomWord: () => {
    return ("0000" + (Math.random()*Math.pow(36, 5) << 0).toString(36)).slice(-5)
  },
  saveUserConfig: (config) => {
    fs.writeFileSync(datavrcURL, ini.stringify(config, { whitespace: true }));
  }
}
var fs        = require('fs-extra');
var path      = require('path');
var tokenFile = path.join(getUserHome(), '.datavrc');
var md5       = require('md5');
var log       = require('./log');
var ini       = require('ini');

function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

module.exports.check = function(callback) {
  fs.readFile(tokenFile, 'utf-8', function(err, data) {
    if (err) {
      log.err(err.stack || err);
      callback('no permission, please use [datav set-key] first.');
    } else {
      try {
        callback(null, ini.parse(data));
      } catch (err) {
        log.err(err.stack || err);
        callback(err.stack || err);
      }
    }
  })
}

module.exports.request = function(form, callback) {
  fs.readFile(tokenFile, function(err, data){
    if (!err) {
      var time = (new Date()).getTime();
      form.field('token', md5(data.toString().trim() + time));
      form.field('tokentime', time);
    }
    callback(err, form);
  });
}

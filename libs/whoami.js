const userConfig = require('../config/user');
const log = require('./utils/log');
const i18n = require('./i18n_json');

const ALLOW_KEY = {
  username: true,
  nickname: true,
  region: true
};

module.exports = function () {
  if (!userConfig.loggedin || !userConfig[userConfig.loggedin]) {
    log.err(i18n.get('publish.loginMessage'));
    return process.exit();
  }
  Object.keys(userConfig[userConfig.loggedin]).forEach(key => {
    if (ALLOW_KEY[key]) {
      log.info(`${key}: ${userConfig[userConfig.loggedin][key]}`);
    }
  })
  return process.exit();
}
const userConfig = require('../config/user');
const log = require('./utils/log');
const i18n = require('./i18n_json');
const saveUserConfig = require('./utils').saveUserConfig;

module.exports = function () {
  delete userConfig.locale;
  saveUserConfig(userConfig);
  log.info(i18n.get('success.setting'));
  process.exit();
}
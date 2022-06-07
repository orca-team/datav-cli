const _ = require('lodash');
const sysConfig = require('../../config');
const userConfig = require('../../config/user');
const getLocale = require('../utils/locale').getLocale;

const i18nTextJSON = {
  "en_US": require('./en_US.json'),
  "ja_JP": require('./ja_JP.json'),
  "zh_CN": require('./zh_CN.json'),
  // "zh_HK": require('./zh_HK.json'),
  // "zh_TW": require('./zh_TW.json')
}

const getI18N = (key, params) => {
  // 1. userConfig.locale 2. user.locale 3. localeDefault
  const locale = getLocale(userConfig, sysConfig);
  const value = _.get(i18nTextJSON, [locale, key]);
  if (!params) {
    return value;
  }
  return value.replace(/\{\s*(?:([^}\s]+)\s+)?([^}\s]+)(?:\s+([^}]+))*\s*\}/g, function($1, helperName, key, param) {
    if (_.has(params, key)) {
      return params[key];
    }
    return $1;
  });
}

const get = (key, params) => {
  return getI18N(`command.${key}`, params) || getI18N(`common.${key}`, params);
}

const getAll = () => {
  return i18nTextJSON;
}

module.exports = {
  get,
  getI18N,
  getAll
};

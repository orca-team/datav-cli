module.exports = {
  getLocale: (userConfig, sysConfig) => {
    return userConfig.locale || (userConfig.loggedin && userConfig[userConfig.loggedin].locale) || sysConfig.localeDefault;
  }
}
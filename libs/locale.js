const inquirer = require("inquirer");
const _ = require('lodash');
const userConfig = require('../config/user');
const log = require('./utils/log');
const i18n = require('./i18n_json');
const saveUserConfig = require('./utils').saveUserConfig;

const LOCALES = {
  'English': 'en_US',
  'Chinese': 'zh_CN',
  'Japanese': 'ja_JP'
}

module.exports = function () {
  function showQuestions() {
    let questions = [
      {
        type: "list",
        name: "locale",
        message: i18n.get('locale.setting'),
        choices: _.keys(LOCALES),
        default: _.invert(LOCALES)[userConfig.locale] || 'English',
        validate: function (value) {
          return !value ? i18n.get('error.empty') : true;
        }
      }
    ];
    
    return inquirer.prompt(questions);
  }

  showQuestions()
    .then(answer => {
      userConfig.locale = LOCALES[answer.locale];
      saveUserConfig(userConfig);
      log.info(i18n.get('success.setting'));
      return process.exit();
    })
}
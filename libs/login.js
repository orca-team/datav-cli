

const inquirer = require("inquirer");
const _ = require('lodash');
const log = require('./utils/log');
const debug = require('debug')('info');
const userConfig = require('../config/user');
const i18n = require('./i18n_json');
const {saveUserConfig} = require('./utils');
const sysConfig = require('../config');
const ServiceClient = require('./utils/service-client');

const DUPLICATE_NAME = {
  LOGIN: i18n.get('login.login'),
  COVER: i18n.get('login.cover'),
  CANCEL: i18n.get('action.cancel')
};

const isDuplicate = (username) => {
  return userConfig[username] || _.some(userConfig, ['username', username]);
};

module.exports = function (config, args) {
  // 1. 填写表单
  // 2. 登录检验
  // 3. 写文件
  function createFile(answers) {
    if (!answers) {
      return process.exit();
    }
    try {
      userConfig[answers.nickname] = answers;
      userConfig.loggedin = answers.nickname;
      saveUserConfig(userConfig);
      log.info(i18n.get('login.success'));
      return process.exit();
    } catch (e) {
      debug(e.stack || e);
      throw i18n.get('login.tokenError');
    }
  }

  function validate(answers) {
    if (answers.login && answers.login === DUPLICATE_NAME.CANCEL) {
      return process.exit();
    }
    if (answers.login && answers.login === DUPLICATE_NAME.LOGIN) {
      const loggedin = userConfig[answers.username] ? answers.username : _.find(userConfig, ['username', answers.username]).nickname;
      answers = userConfig[loggedin];
    } else {
      const oldKey = userConfig[answers.username] ? answers.username : _.get(_.find(userConfig, ['username', answers.username]), 'nickname');
      if (oldKey) userConfig[oldKey] = {};
    }

    // 覆盖
    try {
      const arr = answers.token.split(':');
      const region = config.servers[arr[1]];

      if (!region && !answers.server) throw 'region error';
      
      answers.nickname = answers.needNickname && answers.nickname !== "undefined" ? answers.nickname : answers.username || config.accountNameDefault;
      answers.region = arr[1];
      answers.server = answers.server || config.servers[arr[1]].serverRoot;
      answers.locale = config.servers[arr[1]] && config.servers[arr[1]].locale || 'zh_CN';
      
      if (answers.server[answers.server.length - 1] !== '/') {
        answers.server += '/';
      }

      const client = new ServiceClient({
        endpoint: answers.server,
        token: arr[2],
      });

      const groupId = arr[0];

      if(Number.isNaN(Number(groupId))) {
        return Promise.reject(i18n.get('login.groupIdError'));
      }
      
      return new Promise((resolve, reject) => {
        client.post(`${answers.server  }cli/loginViaToken`, {user_name: answers.username, token: arr[2]}, (err, data) => {
          if (err) {
            debug(err.stack || err);
            reject('network error');
          } else if (data && data.isError) {
            debug('data:', data);
            reject(data.message);
          } else {
            resolve(answers);
          }
        }, {dataType: 'json', timeout: 5 * 60 * 1000});
      });
    } catch (e) {
      debug(e.stack || e);
      throw i18n.get('login.tokenError');
    }
  }

  function showQuestions() {
    const isEmptyValidate = (value) => {
      return !value ? i18n.get('error.empty') : true;
    };
    const questions = [
      {
        type: "input",
        name: "username",
        message: `${i18n.get('login.username')  }:`,
        validate: isEmptyValidate
      },
      {
        type: "list",
        name: "login",
        message: i18n.get('login.duplicateChoise'),
        choices: _.values(DUPLICATE_NAME),
        default: DUPLICATE_NAME.LOGIN,
        when: (answer) => {
          return isDuplicate(answer.username);
        }
      }, 
      {
        type: "input",
        name: "token",
        message: `${i18n.get('login.token')  }:`,
        validate: isEmptyValidate,
        when: (answer) => {
          return !isDuplicate(answer.username) || answer.login === DUPLICATE_NAME.COVER;
        }
      },
      {
        type: "input",
        name: "server",
        message: `${i18n.get('login.server')  }:`,
        validate: isEmptyValidate,
        when: (answer) => {
          const condition = !isDuplicate(answer.username) || answer.login === DUPLICATE_NAME.COVER;
          if (!condition) return false;

          const [,region,] = answer.token && answer.token.split(':');
          return  !sysConfig.servers[region];
        }
      },
      {
        type: 'confirm',
        name: 'needNickname',
        message: i18n.get('login.needNickname'),
        when: (answer) => {
          return !isDuplicate(answer.username) || answer.login === DUPLICATE_NAME.COVER;
        }
      },
      {
        type: "input",
        name: "nickname",
        message: `${i18n.get('login.nickname')  }:`,
        validate (value) {
          if (!value) {
            return i18n.get('error.empty');
          }
          if (userConfig[value]) {
            return i18n.get('login.duplicate');
          }
          if (value === 'undefined') {
            return i18n.get('login.illegal');
          }
          return true;
        },
        when: (answer) => {
          return answer.needNickname;
        }
      },
    ];
    
    return inquirer.prompt(questions);
  }

  showQuestions()
    .then(validate)
    .then(createFile)
    .catch((e) => {
      log.err(`${i18n.get('error.setting')}: ${e.stack || e}`);
      return process.exit();
    });
};

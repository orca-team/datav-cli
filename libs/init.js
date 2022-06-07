const inquirer = require('inquirer');
const fs       = require('fs-extra');
const shelljs  = require('shelljs');
const Path     = require('path');
const process  = require('process');
const semver   = require('semver');
const urllib   = require('urllib');
const log      = require('./utils/log');
const _        = require('lodash');
const unzipper    = require('unzipper');
const debug = require('debug')('info');
const i18n = require('./i18n_json');
const userConfig = require('../config/user');
const pkgJSON = require('../package.json');
const sysConfig = require('../config');
const getLocale = require('./utils/locale').getLocale;

module.exports = function (config, args) {
  shelljs.config.verbose = true;
  shelljs.config.silent = true;

  const user = userConfig[userConfig.loggedin];
  const serverURL = user && user.server || sysConfig.serverDefault;
  const locale = getLocale(userConfig, sysConfig);

  function createDirForCom(answers, newProject) {
    debug('[3]create dir for com');
    var err = fs.mkdirSync('./' + answers.comName);
    if (!err) {
      process.chdir('./' + answers.comName);
      return __download(answers).then(function () {
        shelljs.exec('npm install');
      })
    } else {
      throw err.stack || err;
    }
  }

  function __download(answers) {
    debug('[4]download component.');
    const comName = answers.comName;
    let name = answers.comTemplate.name.split('/');
    var repository = serverURL + 'cube/modules/examples/' + name[name.length-1] + '/' + answers.comTemplate.version;

    var copyUrl = Path.join(config.root, config.cacheDir);
    const comURL = Path.join(copyUrl, `${name[name.length-1]}-${answers.comTemplate.version}`);
    return urllib.request(repository).then(function (res) {
      if (!res || !res.data || !res.headers) throw 'download error';
      return res;
    }).then(function (data) {
      return new Promise((resolve) => {
        var filename = data.headers['content-disposition'].split('=')[1];
        var fileurl = Path.join(config.root, config.cacheDir, filename);
        fs.writeFileSync(fileurl, data.data);
        fs.mkdirSync(comURL);
        console.error('need unzip')
        fs.createReadStream(fileurl).pipe(unzipper.Parse())
          .on('entry', entry => {
            var fileName = entry.path;
            var type = entry.type; 
            if (type === 'Directory') {
              fs.mkdirSync(Path.join(comURL, fileName));
            } else {
              entry.on('data', function (content) {
                content = content.toString('utf-8');

                if (fileName.indexOf('package.json') >= 0) {
                  content = JSON.parse(content);
                  content.version = '0.0.1';
                  content.name = '@namespace/' + comName;
                  content.datav['cn_name'] = answers.comCnName;
                  content = JSON.stringify(content, null, 2);
                }

                content = content.replace(/{comName}/g, comName);
                content = content.replace(/{comCnName}/g, answers.comCnName);
                content = content.replace(/{comDesc}/g, answers.comDesc);
                content = content.replace(/{username}/g, userConfig.loggedin);
                content = content.replace(/{ComName}/g, _.camelCase(comName));

                fs.writeFileSync(Path.join(comURL, fileName), content);
              });
            }
          }).on('close', function () {
            const i18nRootURL = Path.join(comURL, 'i18n');
            const i18nURL = Path.join(i18nRootURL, locale + '.json');
            const packageURL = Path.join(comURL, 'package.json');
            if (fs.existsSync(i18nRootURL)) {
              if (fs.existsSync(i18nURL)) {
                let packageJSON = require(packageURL);
                const i18nJSON = require(i18nURL);
                delete i18nJSON.cn_name;
                packageJSON = _.merge({}, packageJSON, {datav: i18nJSON});
                fs.writeFileSync(packageURL, JSON.stringify(packageJSON, null, 2));
              } else {
                debug('no i18n file:', i18nURL);
              }
              // 删除 i18n
              fs.removeSync(i18nRootURL);
            }
            resolve(Path.join(copyUrl, `${name[name.length-1]}-${answers.comTemplate.version}`));
          });
      });
    }).then(url => {
      // 拷贝 url 到 '.'
      fs.copySync(url, '.');
      // 删除 url
      fs.removeSync(url);
    }).catch(function (e) {
      throw e.stack || e;
    });
  }

  function showQuestions(examples) {
    debug('[2]show questions');
    var questions = [
      {
        type: 'input',
        name: 'comName',
        message: i18n.get('init.comNameMessage'),
        validate: function (value) {
          if (!value) {
            return i18n.get('error.empty');
          }
          if (/_/.test(value)) {
            return i18n.get('error.underline');
          }

          if (fs.existsSync(value)) {
            return i18n.get('error.dirDuplicateName');
          }
          return true;
        }
      },
      {
        type: 'input',
        name: 'comCnName',
        message: i18n.get('init.displayNameMessage'),
        validate: function (value) {
          return !value ? i18n.get('error.empty') : true;
        }
      },
      {
        type: 'input',
        name: 'comDesc',
        message: i18n.get('init.descriptionMessage'),
        validate: function (value) {
          return !value ? i18n.get('error.empty') : true;
        }
      },
      {
        type: 'list',
        name: 'comTemplate',
        message: i18n.get('init.templateMessage'),
        choices: examples && examples.length && _.map(examples, 'cn_name') || [],
        validate: function (value) {
          return !value ? i18n.get('error.empty') : true;
        }
      }
    ];

    return inquirer.prompt(questions).then(function (answers) {
      answers.comTemplate = _.find(examples, {cn_name: answers.comTemplate});
      return answers;
    });
  }

  function getExampleList() {
    debug('[1]get remote example list, url: ', serverURL + 'cube/modules/examples?i18n=' + locale);
    return urllib.request(serverURL + 'cube/modules/examples?i18n=' + locale, {dataType: 'json'}).then(function (data) {
      data = data && data.data || {};
      if (!semver.satisfies(pkgJSON.version, data['datav-cli-version'])) {
        log.warn(i18n.get('init.exampleVersionError', { cliVerion: pkgJSON.version, remoteVersion: data['datav-cli-version'] } ))
      }
      return data.coms || [];
    }).catch(function (e) {
      throw i18n.get('init.remoteError');
    });
  }

  function sayHello() {
    return new Promise((resolve) => {
      resolve();
    });
  }

  sayHello()
    .then(getExampleList)
    .then(showQuestions)
    .then(createDirForCom)
    .then(function () {
      log.info(i18n.get('init.success'));
      return process.exit();
    }).catch(function (e) {
      log.err(e);
      return process.exit();
    });
};



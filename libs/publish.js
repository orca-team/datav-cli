const path    = require('path');
const pack    = require('./utils/pack');
const log     = require('./utils/log');
const ServiceClient = require('./utils/service-client');
const formstream = require('formstream');
const _ = require('lodash');
const debug = require('debug')('info');
const userConfig = require('../config/user');
const sysConfig = require('../config');
const i18n = require('./i18n_json');

module.exports = function (config, root, args) {
  if (!userConfig.loggedin || !userConfig[userConfig.loggedin]) {
    log.err(i18n.get('publish.loginMessage'));
    return process.exit();
  }

  if (typeof root !== 'string') {
    args = root;
    root = process.cwd();
  } else {
    root = path.join(process.cwd(), root);
  }

  const {
    token,
    region,
    username,
    server,
  } = userConfig[userConfig.loggedin];
  let packageCFG;

  log.info(i18n.get('publish.regionMessage', {region}));

  try {
    packageCFG = require(path.join(root, 'package.json'));
  } catch (e) {
    log.err('parse package.json failed');
    return process.exit();
  }

  const tarPath = path.join(config.root, config.cacheDir, `${packageCFG.name.replace('/', '#')}-${packageCFG.version}.tar.gz`);
  pack(root, tarPath, null, (err) => {
    if (err) {
      log.err(err);
      return process.exit();
    } 
    const authArrs = token.split(':');
    if (!authArrs.length || authArrs.length < 2) return log.err(i18n.get('publish.loginMessage'));
    const userGroupId = authArrs[0];
    const regionName = authArrs[1];
    const regionURL = server || (config.servers[regionName] && config.servers[regionName].serverRoot);
    if (!regionURL) return log.err(i18n.get('publish.regionError'));
    
    const client = new ServiceClient({
      endpoint: userConfig.loggedin && userConfig[userConfig.loggedin] && userConfig[userConfig.loggedin].server || sysConfig.serverDefault,
      token: authArrs[2],
    });

    const form = formstream();
    form.file('package', tarPath);
    form.field('name', packageCFG.name);
    form.field('version', packageCFG.version);
    form.field('username', username);
    form.field('userGroupId', parseInt(userGroupId, 10));
    form.field('region', region);
    debug(`${userGroupId} publish ${packageCFG.name}@${packageCFG.version}, to ${regionURL}`);
    log.info(i18n.get('publish.publishing'));

    const options = {
      dataType: 'String', 
      stream: form, 
      timeout: 5 * 60 * 1000,
      headers: form.headers()
    };

    client.post(`${regionURL}cube/upload`, (error, data) => {
      if (error) {
        log.err(error);
        if (data) {
          if(typeof data !== 'string') {
            try {
              log.error(`ErrorCode: ${data.code}, ErrorMsg: ${data.message}`);
              return process.exit(1);
            } catch (e) {
              e;
            }
          }

          log.error(data.toString('utf8'));
        };
        return process.exit(1);
      }

      let msg = data.toString('utf8');
      
      try {
        msg = JSON.parse(msg);
        // eslint-disable-next-line no-empty
      } catch (e) {}

      if (!_.isEmpty(msg)) {
        log.info(msg.message || msg);
      } else {
        log.info('upload successed!');
      }

      return process.exit();
    }, options);
  });
};

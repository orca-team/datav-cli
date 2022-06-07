var path = require('path');
var pack = require('./utils/pack');
var log = require('./utils/log');
const i18n = require('./i18n_json');

module.exports = function(configSys, root) {
  var packageCFG;
  if (typeof root !== 'string') {
    root = process.cwd();
  } else {
    root = path.join(process.cwd(), root);
  }
  // log.debug('root:', root)
  try {
    packageCFG = require(path.join(root, 'package.json'));
  } catch (e) {
    log.err('parse package.json failed');
    return process.exit();
  }
  
  const tarPath = path.join(root, '../', `${packageCFG.name.replace('/', '#')}-${packageCFG.version}.tar.gz`);
  pack(root, tarPath, configSys, function(err) {
    if (err) {
      log.err(err);
      return process.exit();
    } else {
      log.info(`${i18n.get('package.success')}`);
      return process.exit();
    }
  });
}



const fs = require('fs');
const {pack} = require('tar-pack');
const _ = require('lodash');

// const REGEXP_RESOURCE = /(\/?resources)\S*?\.(png|gif|jpeg|jpg){1}/gi;
const IGNORE = ['/node_modules', '/datav_modules', '/.cubecache', '/children/', '/.idea', '/package-lock.json', '/.vscode'];

// @params source 要打包的源目录
// @params target 打包到目标路径
// @params extra 额外信息
// @params callback 
module.exports = function (source, target, extra, callback) {
  return pack(source, {
    filter (entry) {
      const entryPath = entry.path.replace(source, '');
      return _.every(IGNORE, (rule) => {
        return entryPath.indexOf(rule) === -1;
      });
    }
  }).pipe(fs.createWriteStream(target)).on('error', (err) => {
    callback(err);
  }).on('close', () => {
    callback(null);
  });
};

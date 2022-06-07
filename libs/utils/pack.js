

const fs = require('fs-extra2');
const {pack} = require('tar-pack');
const path = require('path');
const _ = require('lodash');

// const REGEXP_RESOURCE = /(\/?resources)\S*?\.(png|gif|jpeg|jpg){1}/gi;
const IGNORE = ['/node_modules', '/datav_modules', '/.cubecache', '/children/', '/.idea', '/package-lock.json', '/.vscode'];

/**
 *
 * @param {any} value
 * @returns {array}
 */
// function loopConfig(config) {
//   if (!config) return null;
//   const res = [];
//   _.forIn(config, (value) => {
//     if ((value.type === 'image' || value.type === 'hidden') && REGEXP_RESOURCE.test(value.default)) {
//       res.push(value.default);
//     } else if (value.type === 'group' && value.children) {
//       res.concat(loopConfig(value.children));
//     } else if (value.type === 'array' && value.child) {
//       res.concat(loopConfig(value.child));
//     }
//   });
//   return res;
// }

/**
 * 根据配置选择性将resources文件夹下的内容挑选出来打包，避免临时文件被打包
 * @param {object} config
 * @returns {array}
 */
// function clearResource(config, fileRoot, sysConfig) {
//   let all = [];
//   if (fs.existsSync(fileRoot)) {
//     all = _.map(fs.readdirSync(fileRoot), (url) => {
//       return path.join('/', sysConfig.resourceDir, url);
//     });
//     const exclude = loopConfig(config);

//     all = _.difference(all, exclude);
//   }
//   return all;
// }

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
  }).pipe(fs.createOutputStream(target)).on('error', (err) => {
    callback(err);
  }).on('close', () => {
    callback(null);
  });
};

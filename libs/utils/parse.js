const Read = require('./read');
const Utils = require('bcore/utils');
const fs = require('fs');
const path = require('path');
const request = require('sync-request');
const { extractDefault, setDefault } = require('./tools');
const _ = require('lodash');

function isNone(d) {
  return d === undefined;
}

/**
 * toConifg 把validate -》config
 */
function validate2Config(validate, name) {         // 为handler fold 改变位置的兼容代码
// function validate2Config(validate, name) {
  let item; let type;
  const obj = (validate instanceof Array) ? [] : {};
  if (validate) {
    for (const key in validate) {
      item = validate[key], type = item.type;
      if (Object.prototype.hasOwnProperty.call(validate, key)) {
        if (type === 'coms') {
          continue;
        } else if (type == 'group') {
          obj[key] = validate2Config(item.children, item.name);
        } else {
          const defaultValue = item.default;
          if (isNone(defaultValue) && key !== 'handler' && key !== 'fold') {
            console.log(`${name  }com.${  key  }.field - not set default`);
          } else {
            obj[key] = item.default;
          }
        }
      }
    }
  }
  return obj;
}

function convertDatav(datav, res, source) {
  datav.validate = datav.config;
  if (datav.protocol >= 2) {
    datav.config = extractDefault({config: _.cloneDeep(datav.validate), value: {}});
  }
  convertAPI(datav, source);
  const coms = convertComs(datav, res, `${source}datav_modules/`);
  if (coms) datav.validate.coms = datav.config.coms = coms;
  return datav;
}

function convertComs(datav, res, comsBase) {
  var coms = datav.coms || (datav.validate && datav.validate.coms);
  var apis = datav.apis;
  if (!coms) return;
  //
  const options = coms.options = Read.coms(coms.options, res, comsBase);
  //
  if (coms.children) {
    const children = coms.children = coms.children.map((child) => {
      return convertComDatav(child, options, comsBase);
    });
  }
  return coms;
}

function convertComDatav(conf, options, comsBase) { // 检查子组件是否合法，有没有id等
  const {comId} = conf;
  if (isNone(comId)) return console.error('your sub com has no comId');
  const datav = options[comId];
  if (isNone(datav)) return console.log('datav.coms.com.comId is not valid');
  conf = Utils.deepMerge(conf, datav); // 自组件的配置合并
  convertAPI(conf, comsBase + comId);
  conf.name = conf.cn_name = conf.name || conf.cn_name;
  return convertDatav(conf);
}

function convertAPI(datav, source) {
  const {apis} = datav;
  const {api_data} = datav;
  for (const k in apis) {
    const api = apis[k];
    if (api_data && api_data[k]) {
      if (typeof api_data[k] === 'string') {
        api_data[k] = convertFileData(api_data[k], source);
      }
      api.default = api_data[k];
    }
  }
}

function convertFileData(filePath, source) {
  let fstat;
  let dataPath;

  if (filePath.indexOf('//') !== -1) {
    dataPath = `http:${  filePath}`;
    try {
      fstat = request('GET', dataPath);
      fstat = fstat.body.toString('utf-8');
      fstat = JSON.parse(fstat);
      return fstat;
    } catch (e) {
      console.log('source not found', e);
      return;
    }
  } else {
    dataPath = path.join(source, filePath);
    try {
      fstat = fs.readFileSync(dataPath, 'utf8');
      fstat = JSON.parse(fstat);
      return fstat;
    } catch (e) {
      console.log('source not found', e);
      return;
    }
  }


  return require(dataPath);
}

function config2Default(newConfig, validate) {
  return setDefault({ config: validate, value: newConfig });
}

function convert2Datav(newConfig, datav) {
  if (datav.protocol >= 2) {
    datav.config = config2Default(newConfig, datav.config);
  } else {
    datav.validate = config2Default(newConfig, datav.validate);
    datav.config = newConfig;
  }
}

function fixConfig(cfg) {
  var loopConfig = function (cfg, parent, handler) {
    for (const key in cfg) {
      const n = cfg[key];
      if (key === 'type' || key === 'name' || key === 'default' || key === 'range') {
        delete cfg[key];
        return true;
      }
      if (key === 'handler' || key === 'fold') {
        if (parent !== cfg) {
          parent[key] = n;
          if (key === 'handler')  handler = n;
        }
        delete cfg[key];
      } else {
        n.handler = n.handler || handler;
      }
      if (n.type === 'group') {
        loopConfig(n.children, n, n.handler);
      }
    }
  };
  loopConfig(cfg, cfg);
  return cfg;
}

module.exports = {
  validate2Config,
  convertDatav,
  convert2Datav,
  fixConfig
};

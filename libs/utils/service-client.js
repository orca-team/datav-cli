'use strict';

const qs = require('qs');
const _ = require('lodash');
const http = require('http');
const urllib = require('urllib');
const regHttp = /https?:\/\//;
const crypto = require('crypto');

function md5(str, encoding = 'hex') {
  let hash = crypto.createHash('md5');
  hash.update(str, 'utf8');
  return hash.digest(encoding);
}

function sha256(str, encoding = 'hex') {
  let hash = crypto.createHash('sha256');
  hash.update(str, 'utf8');
  return hash.digest(encoding);
}

function hmacSha256(str, key, encoding = 'hex') {
  let hmac = crypto.createHmac('sha256', key);
  hmac.update(str, 'utf8');
  return hmac.digest(encoding);
}

function hmacSha1(str, key, encoding = 'hex') {
  let hmac = crypto.createHmac('sha1', key);
  hmac.update(str, 'utf8');
  return hmac.digest(encoding);
}
var utils = {
  md5,
  hmacSha256,
  hmacSha1
};

class ServiceClient {
  constructor(option) {
    option = option || {};
    this.endpoint = option.endpoint;
    this.token = option.token;
    this.keepAliveAgent = new http.Agent({
      keepAlive: true,
      keepAliveMsecs: 1000  // default 1000ms
    });
    this.key = option.key || 'dtboost-system';
    this.log = console;
    this.log.debug = console.log;
    this.log.debug = function () {
      if (option.debug) {
        console.log.apply(null, arguments);
      }
    };
  }

  request(path, options, callback) {
    let headers = _.merge({}, options.headers);

    let token = this.token;
    let method = options.method;
    let flagQ = path.indexOf('?') >= 0;
    let flagHttp = regHttp.test(path);

    if (!flagHttp && path.indexOf('/') !== 0) {
      path = '/' + path;
    }

    let uri;
    if (flagHttp) {
      let idx = path.indexOf('/', 8); // 跳过 `http(s)://` 开始搜索第一个 '/' 的位置
      uri = path.substring(idx);
    } else {
      uri = path;
    }

    let beSignStr;
    let contentMd5;
    let date = new Date().toGMTString();
    if (['POST', 'PUT', 'PATCH'].indexOf(method) >= 0) {
      let cnt;
      switch (typeof options.data) {
        case 'string':
          cnt = options.data;
          break;
        case 'object':
          cnt = JSON.stringify(options.data);
          break;
        default:
          cnt = '';
      }
      contentMd5 = utils.md5(cnt, 'base64');
      beSignStr = `${method}\n${uri}\n${date}\n${contentMd5}`;
      headers['Content-MD5'] = contentMd5;
      this.log.debug('request post body: ', options.data);
    } else {
      let queryString = qs.stringify(options.data);
      if (queryString) {
        uri = uri + (flagQ ? '&' : '?') + queryString;
        path = path + (flagQ ? '&' : '?') + queryString;
      }
      beSignStr = `${method}\n${uri}\n${date}`;
      options.data = {};
    }
    this.log.debug('token:', token, 'beSignStr: ', beSignStr);
    let signature = utils.hmacSha256(beSignStr, token, 'base64');
    headers.signature = `honeybee ${this.key}:${signature}`;
    headers.Date = date;

    options.headers = headers;
    this.log.debug('request headers: ', options.headers);

    let url = flagHttp ? path : (this.endpoint + uri);
    this.log.debug('request url: ', url);
    urllib.request(url, options, function (err, body, res) {
      callback(err, body, res);
    });
  }

  get(path, queryData, callback, opt) {
    if ('function' === typeof queryData) {
      opt = callback;
      callback = queryData;
      queryData = null;
    }
    if (typeof opt === 'number') {
      opt = {
        timeout: opt
      };
    } else if (!opt) {
      opt = {};
    }
    let options = {
      method: 'GET',
      data: queryData,
      dataType: opt.dataType || 'json',
      timeout: 20000
    };
    _.merge(options, opt);
    this.request(path, options, callback);
  }

  post(path, postData, callback, opt) {
    if ('function' === typeof postData) {
      opt = callback;
      callback = postData;
      postData = undefined;
    }
    if (typeof opt === 'number') {
      opt = {
        timeout: opt
      };
    } else if (!opt) {
      opt = {};
    }
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: postData,
      dataType: opt.dataType || 'json',
      timeout: 20000
    };
    _.merge(options, opt);
    this.request(path, options, callback);
  }

  delete(path, queryData, callback, opt) {
    if ('function' === typeof queryData) {
      opt = callback;
      callback = queryData;
      queryData = null;
    }
    if (typeof opt === 'number') {
      opt = {
        timeout: opt
      };
    } else if (!opt) {
      opt = {};
    }
    let options = {
      method: 'DELETE',
      dataType: opt.dataType || 'json',
      data: queryData,
      timeout: 20000
    };
    _.merge(options, opt);
    this.request(path, options, callback);
  }

  put(path, postData, callback, opt) {
    if ('function' === typeof postData) {
      opt = callback;
      callback = postData;
      postData = null;
    }
    if (typeof opt === 'number') {
      opt = {
        timeout: opt
      };
    } else if (!opt) {
      opt = {};
    }
    let options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      data: postData,
      dataType: opt.dataType || 'json',
      timeout: 20000
    };
    _.merge(options, opt);
    this.request(path, options, callback);
  }
};

module.exports = ServiceClient;
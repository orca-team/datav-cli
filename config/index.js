

const _ = require('lodash');
const path = require('path');

let envConfig = {};

try {
  envConfig = require('./config.js');
} catch (e) {
  // do nothing
}
const defaultConfig = {
  env: 'dev',
  debug: true,
  cacheDir: 'tmp_cache',
  iconDir: 'icons',
  resourceDir: 'resources',
  root: path.join(__dirname, '../'),
  servers: {
    CN: {
      server: 'http://com.datav.aliyun.com/cube/',
      serverRoot: 'http://com.datav.aliyun.com/',
      locale: 'zh_CN'
    },
    CN_GOV: {
      server: 'http://com-datav-cn-north-2-gov-1.aliyun.com/cube/',
      serverRoot: 'http://com-datav-cn-north-2-gov-1.aliyun.com/',
      locale: 'zh_CN'
    },
    JP: {
      server: 'http://datav-com-ap-northeast-1.alibabacloud.com/cube/',
      serverRoot: 'http://datav-com-ap-northeast-1.alibabacloud.com/',
      locale: 'ja_JP'
    },
    SG: {
      server: 'http://datav-com-ap-southeast-1.alibabacloud.com/cube/',
      serverRoot: 'http://datav-com-ap-southeast-1.alibabacloud.com/',
      locale: 'en_US',
    },
    DE: {
      server: 'http://datav-com-eu-central-1.alibabacloud.com/cube/',
      serverRoot: 'http://datav-com-eu-central-1.alibabacloud.com/',
      locale: 'en_US',
    },
    HK: {
      server: 'http://datav-cn-hongkong.alibabacloud.com/cube/',
      serverRoot: 'http://datav-cn-hongkong.alibabacloud.com/',
      locale: 'zh_CN',
    },
    MY: {
      server: 'http://datav-com-ap-southeast-3.alibabacloud.com/cube/',
      serverRoot: 'http://datav-com-ap-southeast-3.alibabacloud.com/',
      locale: 'zh_CN',
    },
    IN: {
      server: 'http://datav-com-ap-south-1.alibabacloud.com/cube/',
      serverRoot: 'http://datav-com-ap-south-1.alibabacloud.com/',
      locale: 'zh_CN',
    },
    US_EAST: {
      server: 'http://datav-com-us-east-1.alibabacloud.com/cube/',
      serverRoot: 'http://datav-com-us-east-1.alibabacloud.com/',
      locale: 'zh_CN',
    },
    US_WEST: {
      server: 'http://datav-com-us-west-1.alibabacloud.com/cube/',
      serverRoot: 'http://datav-com-us-west-1.alibabacloud.com/',
      locale: 'zh_CN',
    },
    INNER: {
      server: 'http://com.datav.alibaba-inc.com/cube/',
      serverRoot: 'http://com.datav.alibaba-inc.com/',
      locale: 'zh_CN'
    },
    INNER_ALIPAY:{
      server: 'https://datav.alipay.com/component-center/cube/',
      serverRoot: 'https://datav.alipay.com/component-center/',
      locale: 'zh_CN'
    },
    DEV: {
      server: 'http://dev.com.datav.aliyun.test/cube/',
      serverRoot: 'http://dev.com.datav.aliyun.test/',
      locale: 'zh_CN'
    }
  },
  regionDefault: 'CN',
  localeDefault: 'en_US',
  serverDefault: 'http://com.datav.aliyun.com/',
  accountNameDefault: 'default',
  locale: '',
  port: 1111
};
const config = _.merge({}, defaultConfig, envConfig);

module.exports = config;

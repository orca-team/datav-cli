'use strict';

var log = require('./log');
var latest = require('latest-version');
var co = require('co');
const debug = require('debug')('info');
const i18n = require('../i18n_json');

module.exports = function (config, callback) {
	co(function * (){
		let name = config.name;
		var newVersion = yield latest(name);
		var nowVersion = config.version;
		debug('version', { name: config.name, newVersion, nowVersion });
		if (nowVersion !== newVersion) {
			log.warn(i18n.get('init.versionError', { name: config.name, newVersion, nowVersion }))
      log.warn('please update -- npm install -g ' + name + '@latest');
		} else {
			log.info(i18n.get('version.localLatest', {newVersion}));
		}
		callback && callback();
	});
}
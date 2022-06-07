'use strict';

var ex = require('express');
var bodyParser = require('body-parser');
var partials = require('express-partials');
var ejs = require('ejs');
var cors = require('cors');
var app = ex();

var mw = require('./middleware');
var multer = require('multer');

var log = require('../utils/log');
var path = require('path');
var fs = require('xfs');
var open = require('open');
var i18n = require('../i18n_json');

/**
 * @param {object} option 
 * option 包含：
 * 1. config/index.js 中的环境配置
 * 2. datav run 命令追加的配置：slient、local、port 等
 * 3. view: router 需要的静态页面目录
 * 4. source: 组件根目录
 */
module.exports = (option) => {
  let source = option.source;
  let port = option.port;

  try {
    app.engine('.html', ejs.renderFile);
    app.set('views', option.view);
    app.set('view cache', false);
    app.set('view engine', 'html');
    partials.register('.html', ejs.render);
    app.set('x-powered-by', false);

    option.local && app.use(cors());
    app.use(partials());
    app.use(bodyParser.json({ strict: true }));
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(multer({limits: {
      fileSize: 3*1024*1024,
      files: 1
    }}).single('file'));

    var router = require('./router')(ex.Router(), source, option);
    app.use(router);

    app.use('/__static__', mw.cubeAdmin(option.root, option));
    app.use('/', mw.cubeUser(source, option));

    app.use(function (req, res) {
      res.status(404).end('Not Found');
    });

    app.listen(port, function (err) {
      if (err) {
        log.err(err)
        return
      }
    }).on('error', function(err) { 
      log.info(`${i18n.get('preview.servicePortConflict')} http://localhost:${port}/${option.page || ''}`)
    });

    if (!option.silent) {
      open(`http://localhost:${port}/${option.page || ''}`);
      log.info(i18n.get('preview.serviceStart', {port: `${port}/${option.page || ''}`}));
    }
  } catch (e) {
    log.err(e.stack || e);
  }
}
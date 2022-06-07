

const Cube = require('node-cube');
const path = require('path');
const fs = require('xfs');
const userConfig = require('../../config/user');
const sysConfig = require('../../config');

const logged = userConfig.loggedin;
const user = logged && userConfig[userConfig.loggedin];

// 重写cube log
const LOG = {
  warn () {},
  info () {},
};

const methods = ['debug', 'error'];

function log(type, args) {
  args = [].slice.call(args);
  args.unshift(type);
  args.unshift('[CUBE]');
  console.log.apply(console, args);
}


methods.forEach( (method) => {
  LOG[method] = function () {
    log(`[${  method.toUpperCase()  }]`, arguments);
  };
});

exports.cubeAdmin = function (root, config) {
  return Cube.middleware({
    root: path.join(root, '/static/'),
    noDist: true,
    resBase: '/static/',
    middleware: true,
    remote: 'static',
    log: LOG,
    passUnknowExt: true,
    debug: config.debug,
    maxAge: 0// 3600 * 48 * 1000
  });
};


exports.cubeUser = function (source, options) {
  console.log('source-----------',source);
  const isRemoteLocal = options.local;
  const datavBase = path.join(source, '/datav_modules/');
  const cube = new Cube({
    root: source,
    middleware: true,
    passUnknowExt: true,
    log: LOG,
    processors: {
      '.less': 'cube-less',
      '.jsx': [
        [
          'cube-lazy-parse',
          {
            match: '\\.packed\\.js$'
          }
        ],
        [
          'cube-babel',
          {
            presets: [
              ['react'],
              [
                'env',
                {
                  targets: {
                    browsers: 'last 2 Firefox versions, last 2 Chrome versions, last 2 Edge versions, last 2 Safari versions'
                  }
                }
              ]
            ],
            plugins: [
              'transform-class-properties',
              'transform-es2015-spread',
              'transform-object-rest-spread'
            ]
          }
        ]
      ],
      '.js': [
        [
          'cube-lazy-parse',
          {
            match: '\\.packed\\.js$'
          }
        ],
        [
          'cube-babel',
          {
            presets: [
              ['react'],
              [
                'env',
                {
                  targets: {
                    browsers: 'last 2 Firefox versions, last 2 Chrome versions, last 2 Edge versions, last 2 Safari versions'
                  }
                }
              ]
            ],
            plugins: [
              'transform-class-properties',
              'transform-es2015-spread',
              'transform-object-rest-spread'
            ]
          }
        ]
      ],
      '.glsl': [['cube-glsl', {}]],
      '.json': 'cube-json',
    },
    remoteBase: {
      datav: `${(user && user.server) || sysConfig.serverDefault}cube/`
    },
    remote: isRemoteLocal ? 'local' : '',
    debug: true,
    maxAge: 3600 * 48 * 1000,
    moduleMap: {
      react: '',
      'react-dom': '',
    },
  });

  const originResolveModulePath = cube.resolveModulePath;

  cube.resolveModulePath = function (data, file, callback) {
    console.log('resolve----', data, file);
    let deal = false;
    var _path;
    if (/^\w+?:/.test(file)) {
      // datav: 的部分，其实可以先从本地拉拉看
      const afile = file.replace(/\/\d+\.\d+\.\d+[^\/]*/, '');
      const _file = afile.split('/');
      _path = path.join(datavBase, _file[2]);
      if (!path.extname(_path)) {
        if (fs.existsSync(`${_path}.js`)) {
          deal = true;
        } else if (fs.existsSync(path.join(_path, 'index.js'))) {
          deal = true;
        }
      }
      if (fs.existsSync(_path)) {
        deal = true;
      }
    }
    let p = file;
    if (deal) p = path.join('/datav_modules', _path.replace(datavBase, ''));
    originResolveModulePath.call(this, data, p, callback);
  };
  return Cube.middleware(cube, {});
};
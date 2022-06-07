const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const log = require('./utils/log');
const Webpack = require('webpack');
const merge = require('webpack-merge');

const PKG = 'package.json';
const BUILD_DIR = 'lib';

const NODE_MODULES = path.resolve(__dirname, '../node_modules');

const getNodeModulesLoader = (loader) => path.resolve(NODE_MODULES, loader);

const copyDataV = async ({root, buildDir, pkgConfig, force, datavEntry}) => {
  const pkgModeFile = path.join(root, PKG);
  const ENTRY_MAIN = 'index.js';
  if (pkgConfig) {
    const {dependencies} = pkgConfig || {};
    const presetDeps = {
      "bcore": "0.0.22",
      "react": "^16.13.1",
      "react-dom": "^16.13.1",
      "jquery": "3.5.0",
      "lodash": "4.17.15",
      "prop-types": "15.7.2"
    }
    
    Object.keys(presetDeps).forEach((td) => {
      if (!dependencies[td]) {
        dependencies[td] = presetDeps[td];
      }
    });

    pkgConfig.datav && delete pkgConfig.datav.framework;
    pkgConfig.main = `${datavEntry}/${ENTRY_MAIN}`;
  }
  await fse.writeJsonSync(pkgModeFile, pkgConfig);
  const entryFile = path.join(root, datavEntry, ENTRY_MAIN);
  try {
    if (force || !fs.existsSync(entryFile)) {
      const EVENTS_TEMP = pkgConfig.datav && pkgConfig.datav.events ? JSON.stringify(Object.keys(pkgConfig.datav.events)) : `[]`;
      const contents = fs.readFileSync(path.resolve(__dirname, './datav_entry_temp.js'), "utf8");
      fs.writeFileSync(entryFile, contents.replace('${EVENTS_TEMP}', EVENTS_TEMP));
    }
  }catch(e) {
    console.log(e);
  }
}

const webpackBuild = async ({root, buildDir, args}) => {
  log.info('组件同步开始...');
  // 拿pkgjson
  const pkgConfig = await require(path.join(root, PKG));
  const {dependencies} = pkgConfig || {};
  const presetExternals = {
    jquery: 'jquery',
    bcore: 'bcore',
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    },
    react: 'react',
    'react-dom': 'react-dom',
    // react: {
    //   amd: 'datav-react-adaptor',
    //   root: 'React',
    //   commonjs2: 'datav-react-adaptor',
    //   commonjs: 'datav-react-adaptor'
    // },
    // 'react-dom': {
    //   amd: 'datav-react-dom-adaptor',
    //   root: 'ReactDOM',
    //   commonjs2: 'datav-react-dom-adaptor',
    //   commonjs: 'datav-react-dom-adaptor'
    // }
  };
  // 临时方案 目前无法不支持antd打包
  const notSupportDeps = ['antd'];
  const deps = Object.keys(dependencies || {}).map((d) => d).filter(d => !presetExternals[d] && !notSupportDeps.includes(d));
  let webpackConfig = {
    mode: 'production',
    entry: path.resolve(path.join(root, './src/index.js')),
    devtool: "none",
    output: {
      path: path.resolve(buildDir),
      filename: 'index.js',
      libraryTarget: 'umd',
      library: 'Chart'
    },
    resolve: {
      extensions: ['.js', '.json', '.jsx', '.ts'],
    },
    node: {
      fs: 'empty'
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        use: {
          loader: getNodeModulesLoader('babel-loader'),
          options: {
            presets: [
              getNodeModulesLoader('@babel/preset-env'),
              getNodeModulesLoader('@babel/preset-react'),
              {
                'plugins': [getNodeModulesLoader('@babel/plugin-proposal-class-properties')]
              }
            ]
          }
        },
        exclude: /node_modules/
      }, {
        test: /\.(glsl|frag|vert)$/,
        use: [
          getNodeModulesLoader('raw-loader'),
          getNodeModulesLoader('glslify-loader'),
        ]
      },
      {
        test: /\.css$/,
        use: [
          getNodeModulesLoader('style-loader'),
          getNodeModulesLoader('css-loader'),
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          path.resolve(NODE_MODULES, 'style-loader'),
          path.resolve(NODE_MODULES, 'css-loader'),
          path.resolve(NODE_MODULES, 'sass-loader')
        ],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          path.resolve(NODE_MODULES, 'style-loader'),
          path.resolve(NODE_MODULES, 'css-loader'),
          {
            loader: path.resolve(NODE_MODULES, 'less-loader'),
            options: {
              lessOptions: {
                javascriptEnabled: true
             }
            }
          }
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|eot|ttf|woff|woff2)$/,
        use: [{
          loader: getNodeModulesLoader('url-loader'),
          options: {
            limit: 1000000
          }
        }],
      }
    ]},
    externals: [
      ...deps,
      function(context, request, callback) {
        if (request.indexOf('datav:/') === 0) {
          return callback(null, 'commonjs ' + request);
        }
        const l = request.split('/').length && request.split('/')[0];
        if (l && deps.some(d => l === d)){
          return callback(null, 'commonjs ' + request);
        }
        callback();
      },
      presetExternals
    ]
  };
  
  try {
    // step 1. 检查是否有webpack.config.js
    if (args.config) {
      const customWebPackFile = path.join(root, args.config)
      if (fs.existsSync(customWebPackFile)) {
        const specificWebpackConfig = require(customWebPackFile);
        webpackConfig = merge(webpackConfig, specificWebpackConfig);
      }
    }

    if (args.entry) webpackConfig.entry = path.resolve(path.join(root, args.entry));
    // Step 2. 打包
    return new Promise(async (resolve, reject) => {
      const webpackBuild = Webpack(webpackConfig);
      webpackBuild.run(async (err, stats) => {
        if (err || stats.hasErrors()) {
          log.err('error0', err, stats);
        } else {
          log.info(`组件同步完成`);
          // Step 3. copy package.mode.json
          await copyDataV({root, buildDir, pkgConfig, force: args.force, datavEntry: args.datavEntry || 'lib'});
          return resolve();
        }
      });
    })
  } catch (e) {
    log.err('error1', e);
    return process.exit();
  }
}

module.exports = async function (config, root, args) {
  if (typeof root !== 'string') {
    args = root;
    root = process.cwd();
  } else {
    root = path.join(process.cwd(), root);
  }

  const buildDir = path.join(root, `${args.datavEntry ? args.datavEntry : 'lib'}`, BUILD_DIR);
  await webpackBuild({root, buildDir, args});
};

const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const log = require('./utils/log');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const PKG = 'package.json';
const BUILD_DIR = 'build';
const DEFAULT_MODE = 'all';

const NODE_MODULES = path.resolve(__dirname, '../node_modules');

const getNodeModulesLoader = (loader) => path.resolve(NODE_MODULES, loader);

const copyPKG = async ({root, buildDir, envMode}) => {
  const pkgModeFile = path.join(root, `package.${envMode}.json`);
  let pkgFile = pkgModeFile;
  if (!fse.existsSync(pkgModeFile)) {
    pkgFile = path.join(root, PKG)
  }
  await fse.copyFileSync(pkgFile, path.join(buildDir, PKG));
}

const webpackBuild = async ({root, buildDir, envMode}) => {
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
    plugins: [
      new Webpack.DefinePlugin({
        'env.mode': JSON.stringify(envMode)
      })
    ],
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
              getNodeModulesLoader('@babel/preset-react')
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
          path.resolve(NODE_MODULES, 'less-loader')
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [getNodeModulesLoader('file-loader')]
      }
    ]},
    externals: [
      {
        jquery: 'jquery',
        bcore: 'bcore',
        lodash: {
          commonjs: 'lodash',
          commonjs2: 'lodash',
          amd: 'lodash',
          root: '_'
        }
      }
    ]  
  };
  
  try {
    // step 1. 检查是否有webpack.config.js
    const customWebPackFile = path.join(root, 'webpack.config.js')
    if (fs.existsSync(customWebPackFile)) {
      const specificWebpackConfig = require(customWebPackFile);
      webpackConfig = merge(webpackBaseConfig, specificWebpackConfig);
    }
    // Step 2. 打包
    return new Promise(async (resolve, reject) => {
      const webpackBuild = Webpack(webpackConfig);
      webpackBuild.run(async (err, stats) => {
        if (err || stats.hasErrors()) {
          log.err('error0', err, stats);
        } else {
          log.info(`mode=${envMode}, 打包完成`);
          // Step 3. copy package.mode.json
          await copyPKG({root, buildDir, envMode});
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

  const envMode = args.mode || DEFAULT_MODE;

  log.info(`您选择了打包模式为：${envMode}`);
  if (envMode === 'all') {
    try {
      const pkgConf = await fse.readJsonSync(path.join(root, PKG));
      if (pkgConf && pkgConf.envMode) {
        const allMode = pkgConf.envMode.options;
        log.info(`ALL模式包含：${allMode},共${allMode.length}种模式`);
        if (!allMode || !allMode.length) {
          log.err('请检查package.json中是否包含envMode.options字段 or 使用datav build --mode=lite')
        } else {
          const buildList = allMode.map((mode) => {
            return new Promise(async(resolve, reject) => {
              log.info(`mode=${mode}，打包中...`)
              const buildDir = path.join(root, BUILD_DIR, mode);
              await webpackBuild({root, buildDir, envMode: mode});
              return resolve();
            });
          });
          Promise.all(buildList).then(() => {
            log.info(`ALL模式打包完成：${allMode}`);
          });
        }
      }
    } catch(err) {
      log.err(err)
    }
  } else {
    const buildDir = path.join(root, BUILD_DIR, envMode);
    await webpackBuild({root, buildDir, envMode});
  }
};

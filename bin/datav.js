#!/usr/bin/env node

"use strict";
const chalk = require('chalk');
const cmd = require('commander');
const fs = require('fs');
const _ = require('lodash');
const path = require('path');
const pkgJSON = require('../package.json');
const version = require('../libs/utils/check-version');
const log = require('../libs/utils/log');
const i18n = require('../libs/i18n_json');
const whoami = require('../libs/whoami');
const checkNodejsVersion = require('../libs/utils/check-nodejs-version');
const config = require('../config');

const logo =
`                                                                             
                                                                             
          ___           ___           ___           ___           ___        
         /\\  \\         /\\  \\         /\\  \\         /\\  \\         /\\__\\       
        /::\\  \\       /::\\  \\        \\:\\  \\       /::\\  \\       /:/  /       
       /:/\\:\\  \\     /:/\\:\\  \\        \\:\\  \\     /:/\\:\\  \\     /:/  /        
      /:/  \\:\\__\\   /::\\~\\:\\  \\       /::\\  \\   /::\\~\\:\\  \\   /:/__/  ___    
     /:/__/ \\:|__| /:/\\:\\ \\:\\__\\     /:/\\:\\__\\ /:/\\:\\ \\:\\__\\  |:|  | /\\__\\   
     \\:\\  \\ /:/  / \\/__\\:\\/:/  /    /:/  \\/__/ \\/__\\:\\/:/  /  |:|  |/:/  /   
      \\:\\  /:/  /       \\::/  /    /:/  /           \\::/  /   |:|__/:/  /    
       \\:\\/:/  /        /:/  /     \\/__/            /:/  /     \\::::/__/     
        \\::/__/        /:/  /                      /:/  /       ~~~~         
         ~~            \\/__/                       \\/__/                     
                                                                             
                                                                            

`;

console.log(chalk.cyan(logo));
checkNodejsVersion();
console.log(i18n.get('hello.npm'));

const COMMANDMAP = {
  preview: require('../libs/preview'),     //预览
  comInit: require('../libs/init'),        //初始化
  login:   require('../libs/login'),       //登录
  publish: require('../libs/publish'),     //发布
  package: require('../libs/package'),     //打包
  locale: require('../libs/locale'),       // 语言环境
  localeClear: require('../libs/locale_clear'), // 清空语言环境
  comBuild: require('../libs/build'), // 组件不同版本打包
  comBuildReact: require('../libs/react_com_build')// react组件toDataV组件 临时方案，后续新增datav preview datav publish一键发布
};

function exec(command, ...args) {
  log.debugModeSwitch(args[0]?.debug);
  COMMANDMAP[command](config, ...args);
}

function list(val) {
  return val.split(',');
}

cmd
  .usage('[options] <folder|file...>')
  .version(pkgJSON.version)
  .description(i18n.get('datav.title'))
  .option('-v --verbose', 'increase verbosity')
  .option('-E --exclude <items>', 'exclude file or folder', list);

cmd.command('set-key')
  .alias('login')
  .description('set-key with you username and token in the datav.aliyun.com')
  .action((...args) => exec('login', ...args));

cmd.command('init')
  .description('init com for datav-coms')
  .action((...args) => exec('comInit', ...args));

cmd
  .command('start')
  .alias('run')
  .option('-p --port [value]', 'custom server port')
  .option('-s --silent', 'keep silent')
  .option('-l --local', 'use local remote')
  .option('-i --locale [value]', 'language mode, ex: en-US')
  .description('start service for preview component')
  .action((...args) => exec('preview', ...args));

cmd
  .command('publish')
  .alias('pbl')
  .description('publish component')
  .action((...args) => exec('publish', ...args));

cmd
  .command('package')
  .alias('pack')
  .description('package component')
  .action((...args) => exec('package', ...args));

cmd
  .command('locale')
  .description('Set your locale')
  .action((...args) => exec('locale', ...args));

cmd
  .command('locale-clear')
  .alias('lc')
  .description('Clear your locale')
  .action((...args) => exec('localeClear', ...args));

cmd.command('help')
  .description('help')
  .action(() => cmd.help());

cmd.command('latest')
  .description('check ' + pkgJSON.name + ' latest version')
  .action(() => version(pkgJSON));

cmd.command('whoami')
  .description('display datav username, datav region')
  .action(whoami);

cmd.command('build')
  .description('datav build test')
  .option('--mode [value]', 'default is lite')
  .action((...args) => exec('comBuild', ...args))

cmd.command('build-react')
  .description('datav build-react')
  .option('--entry [value]', 'default entry=src/index.js')
  .option('--datav-entry [value]', 'default datav-entry=index.js')
  .option('--force [value]', 'default is false')
  .option('--config [value]', 'default config=webpack.config.js ')
  .action((...args) => exec('comBuildReact', ...args))


  cmd.version('v' + pkgJSON.version);

cmd.parse(process.argv);

if (!cmd.args.length) {
  cmd.help();
}

const cacheDir = path.join(config.root, config.cacheDir);
if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir);
}
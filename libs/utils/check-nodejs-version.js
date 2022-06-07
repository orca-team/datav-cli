const chalk = require('chalk');
const i18n = require('../i18n_json');

function compareVersion(ver1, ver2) {
  const arr1 = ver1.split('.');
  const arr2 = ver2.split('.');

  if (ver1 === ver2) {
    return 0;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return +arr1[i] > +arr2[i] ? 1 : -1;
    }
  }
}

const minVersion = '8.0.0';
const maxVersion = '12.0.0';

module.exports = function() {
  /* es6 support see http://node.green/ */
  if (compareVersion(process.versions.node, maxVersion) > 0 || compareVersion(process.versions.node, minVersion) < 0) {
    /*eslint-disable */
    console.error(chalk.yellow('------------------------- WARN ---------------------------'));
    console.error(chalk.yellow(i18n.get(
          'datav.version',
          {
            nodejsVersion: process.versions.node,
            minVersion: minVersion,
            maxVersion: maxVersion
          }
        )));
    console.error(chalk.yellow('-----------------------------------------------------------'));
    /* eslint-enable */
    // process.exit(1);
  }
};

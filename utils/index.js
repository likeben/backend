const chalk = require('chalk');

module.exports = {
  log: console.log, // eslint-disable-line
  error: chalk.bold.red,
  warn: chalk.keyword('orange'),
  info: chalk.blue
};

// commands/greet.js
const chalk = require('chalk');

function greet() {
  console.log(chalk.green.bold("👋 Hello, welcome to Ninja Utility!"));
}

module.exports = greet;

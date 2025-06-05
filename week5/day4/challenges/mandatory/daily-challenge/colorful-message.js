// colorful-message.js
import chalk from 'chalk';

// Export a function to show colorful message
export function showColorfulMessage() {
  console.log(
    chalk.blue('This is a ') +
    chalk.red.bold('colorful ') +
    chalk.green('message!')
  );
}

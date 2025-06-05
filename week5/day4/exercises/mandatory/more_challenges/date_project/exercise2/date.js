// ex2/date.js
const prompt = require('prompt-sync')();
// ex2/date.js

function getUserBirthdateMinutes() {
  const input = prompt('Enter your birthdate (YYYY-MM-DD): ');
  const birthdate = new Date(input);
  const now = new Date();

  if (isNaN(birthdate.getTime())) {
    return 'Invalid date format. Please use YYYY-MM-DD.';
  }

  const diff = now - birthdate;
  const minutes = Math.floor(diff / (1000 * 60));

  return `You have lived for approximately ${minutes.toLocaleString()} minutes.`;
}

module.exports = getUserBirthdateMinutes;

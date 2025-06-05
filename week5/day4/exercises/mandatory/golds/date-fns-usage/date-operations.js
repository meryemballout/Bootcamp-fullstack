// date-operations.js
const { format, addDays } = require('date-fns');

function performDateOperations() {
  const currentDate = new Date(); // Date actuelle
  const futureDate = addDays(currentDate, 5); // Ajouter 5 jours
  const formattedDate = format(futureDate, 'yyyy-MM-dd HH:mm:ss'); // Formatter la date

  console.log('Date actuelle + 5 jours :', formattedDate);
}

module.exports = performDateOperations;

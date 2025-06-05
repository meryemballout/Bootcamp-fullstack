// ex3/date.js
const Holidays = require('date-holidays');

function getNextHolidayInfo() {
  const hd = new Holidays('FR'); // Tu peux changer le pays ici
  const now = new Date();
  const holidays = hd.getHolidays(now.getFullYear());

  // Trouver le prochain jour férié
  const nextHoliday = holidays.find(h => new Date(h.date) > now);

  if (!nextHoliday) {
    return "No more holidays this year 🎉";
  }

  const holidayDate = new Date(nextHoliday.date);
  const diff = holidayDate - now;

  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return `Today is ${now.toDateString()}.\nThe next holiday is "${nextHoliday.name}" on ${holidayDate.toDateString()}.\nIt is in ${days} days and ${hours}:${minutes}:${seconds} hours.`;
}
// ex3/date.js
module.exports = getNextHolidayInfo;

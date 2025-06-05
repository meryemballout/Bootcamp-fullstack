// ex1/date.js
// ex1/date.js
function timeUntilNewYear() {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const jan1 = new Date(`${nextYear}-01-01T00:00:00`);
  const diff = jan1 - now;

  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return `The 1st January is in ${days} days and ${hours}:${minutes}:${seconds} hours.`;
}

module.exports = timeUntilNewYear;

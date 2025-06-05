// commands/fetch.js
const axios = require('axios');

async function fetch() {
  try {
    const response = await axios.get('https://api.publicapis.org/entries'); // exemple d'API publique
    console.log("📦 Données reçues :", response.data.entries.slice(0, 3)); // afficher les 3 premiers
  } catch (error) {
    console.error("❌ Erreur lors de la récupération :", error.message);
  }
}

module.exports = fetch;

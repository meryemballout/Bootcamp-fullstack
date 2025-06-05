// file-info.js
const fs = require('fs');
const path = require('path');

function displayFileInfo() {
  const filePath = path.join(__dirname, 'data', 'example.txt');

  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    console.log('✅ Le fichier existe.');
    console.log(`📄 Taille : ${stats.size} octets`);
    console.log(`🕒 Créé le : ${stats.birthtime}`);
  } else {
    console.log('❌ Le fichier n\'existe pas.');
  }
}

module.exports = displayFileInfo;

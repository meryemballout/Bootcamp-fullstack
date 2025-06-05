// commands/read.js
const fs = require('fs');
const path = require('path');

function read(filename) {
  const filePath = path.resolve(filename);

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('❌ Erreur de lecture du fichier :', err.message);
      return;
    }
    console.log('📄 Contenu du fichier :\n', data);
  });
}

module.exports = read;

const { readFile, writeFile } = require('./fileManager');

readFile('Hello World.txt', (err, data) => {
  if (err) {
    console.error('Erreur lecture fichier:', err);
    return;
  }
  console.log('Contenu lu:', data);

  writeFile('Bye World.txt', 'Writing to the file', (err) => {
    if (err) {
      console.error('Erreur écriture fichier:', err);
      return;
    }
    console.log('Écriture réussie dans "Bye World.txt"');
  });
});

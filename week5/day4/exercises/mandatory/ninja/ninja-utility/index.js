// index.js
const { program } = require('commander');
const greet = require('./commands/greet');
const fetch = require('./commands/fetch');
const read = require('./commands/read');

program
  .command('greet')
  .description('Affiche un message de bienvenue coloré')
  .action(greet);

program
  .command('fetch')
  .description('Récupère des données depuis une API publique')
  .action(fetch);

program
  .command('read <filename>')
  .description('Lit le contenu d’un fichier')
  .action(read);

program.parse(process.argv);

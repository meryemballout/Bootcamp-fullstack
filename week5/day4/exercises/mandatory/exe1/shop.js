// Importe les produits avec CommonJS
const products = require('./products.js');

// Fonction pour rechercher un produit par nom
function findProductByName(productName) {
  const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
  return product || `Product "${productName}" not found.`;
}

// Appels de la fonction avec affichage
console.log(findProductByName('Laptop'));
console.log(findProductByName('Book'));
console.log(findProductByName('Smartphone'));
console.log(findProductByName('Tablet')); // N'existe pas

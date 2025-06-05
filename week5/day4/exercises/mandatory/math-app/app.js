// app.js
import _ from 'lodash';              
import math from './math.js';       

const sum = math.add(5, 7);               
const product = math.multiply(5, 7);      

const numbers = [sum, product, 18, 4];
const maxValue = _.max(numbers);
const shuffled = _.shuffle(numbers);

console.log('Somme     :', sum);
console.log('Produit   :', product);
console.log('Max       :', maxValue);
console.log('Mélange   :', shuffled);

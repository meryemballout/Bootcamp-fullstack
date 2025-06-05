// app.js
// Import greet from greeting.js using ES module syntax
import { greet } from './greeting.js';
import { showColorfulMessage } from './colorful-message.js';
import { readFileContent } from './read-file.js';

const message = greet('Alice');
console.log(message);
showColorfulMessage();
await readFileContent();

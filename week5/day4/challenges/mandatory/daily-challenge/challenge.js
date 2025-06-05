// challenge.js

// Import all modules
import { greet } from './greeting.js';
import { showColorfulMessage } from './colorful-message.js';
import { readFileContent } from './read-file.js';

// Display greeting
console.log(greet('Chaimaa'));

// Show colorful message
showColorfulMessage();

// Read and display file content
await readFileContent();

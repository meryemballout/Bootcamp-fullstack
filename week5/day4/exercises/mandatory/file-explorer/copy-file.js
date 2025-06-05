// Import the fs module from Node.js using ES module syntax
import fs from 'fs';

// Read the content of source.txt
fs.readFile('source.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading source.txt:', err);
    return;
  }

  // Write the content to destination.txt
  fs.writeFile('destination.txt', data, (err) => {
    if (err) {
      console.error('Error writing destination.txt:', err);
    } else {
      console.log('Content copied successfully from source.txt to destination.txt');
    }
  });
});

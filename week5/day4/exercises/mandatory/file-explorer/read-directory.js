// Import the fs module from Node.js using ES module syntax
import fs from 'fs';

// Read the list of files in the current directory
fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error reading the directory:', err);
    return;
  }

  console.log('Files in the current directory:');
  files.forEach(file => {
    console.log(file);
  });
});

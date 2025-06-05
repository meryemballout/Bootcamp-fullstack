// read-file.js

// Import the fs/promises module for reading files
import { readFile } from 'fs/promises';

// Function to read and display the content of a file
export async function readFileContent() {
    try {
        const data = await readFile('./files/file-data.txt', 'utf-8');
        console.log('📄 File Content:\n' + data);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

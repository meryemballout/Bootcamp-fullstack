// app.js

// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Use express.json() middleware to parse JSON request bodies
app.use(express.json());

// Define a sample array of books
let books = [
  { id: 1, title: "1984", author: "George Orwell", publishedYear: 1949 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", publishedYear: 1960 },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", publishedYear: 1925 }
];

// Set the port to 5000
const PORT = 5000;

// --- ROUTES ---

// Read all books
// GET /api/books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Read a single book by ID
// GET /api/books/:bookId
app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);

  if (!book) {
    // If book not found, send 404 status with message
    return res.status(404).json({ message: "Book not found" });
  }

  // If found, send the book details with status 200
  res.status(200).json(book);
});

// Create a new book
// POST /api/books
app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;

  // Create a new book object with an incremented ID
  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear
  };

  // Add the new book to the books array
  books.push(newBook);

  // Return the new book with status 201 (Created)
  res.status(201).json(newBook);
});

// Start the server and listen on port 5000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

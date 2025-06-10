// routes/books.js
const express = require('express');
const router = express.Router();

// Sample in-memory "database"
let books = [];
let nextId = 1;

// Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// Add a new book
router.post('/', (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: nextId++, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book by ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  book.title = title;
  book.author = author;
  res.json(book);
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }

  books.splice(index, 1);
  res.json({ message: 'Book deleted successfully' });
});

module.exports = router;

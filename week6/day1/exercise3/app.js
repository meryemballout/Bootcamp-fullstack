// app.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Import and mount the books router
const booksRouter = require('./routes/books');
app.use('/books', booksRouter);

// Start the server
app.listen(port, () => {
  console.log(`📚 Server is running at http://localhost:${port}`);
});

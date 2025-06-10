// app.js
const express = require('express');
const app = express();
const port = 3000;

// Import routes from the routes folder
const indexRoutes = require('./routes/index');

// Use the imported routes
app.use('/', indexRoutes);

// Start the server
app.listen(port, () => {
  console.log(` Server is running at http://localhost:${port}`);
});

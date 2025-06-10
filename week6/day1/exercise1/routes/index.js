const express = require('express');
const router = express.Router();

// Homepage route
router.get('/', (req, res) => {
  res.send('🏠 Welcome to the homepage!');
});

// About page route
router.get('/about', (req, res) => {
  res.send('ℹ️ This is the About Us page.');
});

module.exports = router;


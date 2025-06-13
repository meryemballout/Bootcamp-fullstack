const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Parser = require('rss-parser');
const parser = new Parser();

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// GET all posts
app.get('/', async (req, res) => {
  const feed = await parser.parseURL('https://thefactfile.org/feed/');
  res.render('pages/index', { posts: feed.items });
});

// GET search page
app.get('/search', (req, res) => {
  res.render('pages/search', { posts: [] });
});

// POST search by title
app.post('/search/title', async (req, res) => {
  const { title } = req.body;
  const feed = await parser.parseURL('https://thefactfile.org/feed/');
  const filtered = feed.items.filter(item => item.title.toLowerCase().includes(title.toLowerCase()));
  res.render('pages/search', { posts: filtered });
});

// POST search by category
app.post('/search/category', async (req, res) => {
  const { category } = req.body;
  const feed = await parser.parseURL('https://thefactfile.org/feed/');
  const filtered = feed.items.filter(item => {
    return item.categories && item.categories.includes(category);
  });
  res.render('pages/search', { posts: filtered });
});

app.listen(port, () => {
  console.log(`RSS Reader running at http://localhost:${port}`);
});
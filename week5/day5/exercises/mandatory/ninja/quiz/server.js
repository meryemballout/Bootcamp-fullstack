const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const scores = [];

// Enregistrer un score
app.post('/score', (req, res) => {
  const { username, score } = req.body;
  if (!username || typeof score !== 'number') {
    return res.status(400).json({ message: 'Username et score requis' });
  }
  scores.push({ username, score });
  scores.sort((a, b) => b.score - a.score);
  res.json({ message: 'Score enregistré !' });
});

// Récupérer top 10 du leaderboard
app.get('/leaderboard', (req, res) => {
  res.json(scores.slice(0, 10));
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});

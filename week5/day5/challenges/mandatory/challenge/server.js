const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const emojis = require('./data/emojis');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

let leaderboard = []; // stock score

// Fonction pour générer question (1 bonne réponse + 3 distracteurs)
function generateQuestion() {
  const correctIndex = Math.floor(Math.random() * emojis.length);
  const correctEmoji = emojis[correctIndex];
  
  let options = new Set();
  options.add(correctEmoji.name);
  while(options.size < 4) {
    const randomName = emojis[Math.floor(Math.random() * emojis.length)].name;
    options.add(randomName);
  }
  options = Array.from(options).sort(() => Math.random() - 0.5); // shuffle

  return {
    emoji: correctEmoji.emoji,
    correctName: correctEmoji.name,
    options,
  };
}

app.get('/api/emoji', (req, res) => {
  const question = generateQuestion();
  res.json({ emoji: question.emoji, options: question.options, correctName: question.correctName });
});

// Endpoint pour recevoir la réponse et vérifier
app.post('/api/guess', (req, res) => {
  const { guess, correctName, player } = req.body;
  const correct = guess === correctName;
  
  // Met à jour leaderboard (simplifié)
  if(player) {
    let entry = leaderboard.find(e => e.name === player);
    if(!entry) {
      leaderboard.push({ name: player, score: correct ? 1 : 0 });
    } else if(correct) {
      entry.score++;
    }
  }

  res.json({ correct, score: leaderboard.find(e => e.name === player)?.score || 0 });
});

app.get('/api/leaderboard', (req, res) => {
  const top = leaderboard.sort((a,b) => b.score - a.score).slice(0, 10);
  res.json(top);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

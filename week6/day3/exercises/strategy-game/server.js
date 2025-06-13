const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const gameRoutes = require('./routes/gameRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/game', gameRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// === backend/data/gameState.js ===
const game = {
  gridSize: 10,
  players: {
    player1: { x: 0, y: 0, base: { x: 0, y: 0 } },
    player2: { x: 9, y: 9, base: { x: 9, y: 9 } }
  },
  turn: 'player1',
  obstacles: [
    { x: 4, y: 4 },
    { x: 5, y: 5 },
    { x: 3, y: 6 }
  ],
  winner: null
};

module.exports = game;
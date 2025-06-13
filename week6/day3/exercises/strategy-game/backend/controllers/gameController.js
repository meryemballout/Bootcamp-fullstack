const game = require('../data/gameState');
const logic = require('../utils/gameLogic');

exports.startGame = (req, res) => {
  game.players.player1 = { x: 0, y: 0, base: { x: 0, y: 0 } };
  game.players.player2 = { x: 9, y: 9, base: { x: 9, y: 9 } };
  game.turn = 'player1';
  game.winner = null;
  game.obstacles = [
    { x: 4, y: 4 },
    { x: 5, y: 5 },
    { x: 3, y: 6 }
  ];
  res.send(game);
};

exports.movePlayer = (req, res) => {
  const { player, direction } = req.body;
  if (game.winner) return res.status(400).send({ message: 'Game over' });
  if (game.turn !== player) return res.status(400).send({ message: 'Not your turn' });

  const moved = logic.move(game, player, direction);
  if (!moved) return res.status(400).send({ message: 'Invalid move' });

  game.turn = game.turn === 'player1' ? 'player2' : 'player1';
  res.send(game);
};

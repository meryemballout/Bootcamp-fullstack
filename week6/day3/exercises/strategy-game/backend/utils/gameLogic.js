exports.move = (game, player, direction) => {
  const current = game.players[player];
  const dx = { up: 0, down: 0, left: -1, right: 1 }[direction] || 0;
  const dy = { up: -1, down: 1, left: 0, right: 0 }[direction] || 0;

  const newX = current.x + dx;
  const newY = current.y + dy;

  if (newX < 0 || newX >= game.gridSize || newY < 0 || newY >= game.gridSize)
    return false;
  if (game.obstacles.some((o) => o.x === newX && o.y === newY)) return false;

  current.x = newX;
  current.y = newY;

  const opponent = player === "player1" ? "player2" : "player1";
  const base = game.players[opponent].base;

  if (newX === base.x && newY === base.y) {
    game.winner = player;
  }

  return true;
};

const board = document.getElementById('game-board');
let currentPlayer = 'player1';

function renderBoard(game) {
  board.innerHTML = '';
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const cell = document.createElement('div');
      cell.className = 'cell';

      const isBase = (b) => b.x === x && b.y === y;
      const isPlayer = (p) => p.x === x && p.y === y;

      if (isPlayer(game.players.player1)) cell.classList.add('player1');
      else if (isPlayer(game.players.player2)) cell.classList.add('player2');

      if (isBase(game.players.player1.base) || isBase(game.players.player2.base)) cell.classList.add('base');

      if (game.obstacles.some(o => o.x === x && o.y === y)) cell.classList.add('obstacle');

      board.appendChild(cell);
    }
  }
  if (game.winner) alert(`${game.winner} wins!`);
}

function move(direction) {
  fetch('http://localhost:3000/api/game/move', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ player: currentPlayer, direction })
  })
    .then(res => res.json())
    .then(game => {
      renderBoard(game);
      currentPlayer = game.turn;
    });
}

// Démarrer le jeu
fetch('http://localhost:3000/api/game/start', { method: 'POST' })
  .then(res => res.json())
  .then(renderBoard);
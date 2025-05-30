const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let board;
let humanPlayer = 'X';
let aiPlayer = 'O';
let currentPlayer;
let gameOver = false;

const cells = document.querySelectorAll('.cell');
const resultDiv = document.getElementById('result');
const restartBtn = document.getElementById('restartBtn');

function setPlayer(symbol) {
  humanPlayer = symbol;
  aiPlayer = symbol === 'X' ? 'O' : 'X';
  startGame();
}

function startGame() {
  board = Array.from(Array(9).keys());
  gameOver = false;
  resultDiv.innerText = '';
  restartBtn.style.display = 'none';

  cells.forEach(cell => {
    cell.innerText = '';
    cell.classList.remove('taken');
  });

  // If AI is X, let AI start
  if (aiPlayer === 'X') {
    bestMove();
  }
}

function handleTurn(index) {
  if (typeof board[index] === 'number' && !gameOver) {
    turn(index, humanPlayer);
    if (!gameOver) {
      let difficulty = document.getElementById('difficulty').value;
      if (difficulty === 'easy') {
        easyMove();
      } else {
        bestMove();
      }
    }
  }
}

function turn(index, player) {
  board[index] = player;
  document.getElementById(index).innerText = player;
  document.getElementById(index).classList.add('taken');

  if (checkWin(board, player)) {
    endGame(player);
  } else if (checkTie()) {
    endGame('tie');
  }
}

function easyMove() {
  let available = board.filter(s => typeof s === 'number');
  let move = available[Math.floor(Math.random() * available.length)];
  turn(move, aiPlayer);
}

function bestMove() {
  let move = minimax(board, aiPlayer).index;
  turn(move, aiPlayer);
}

function checkWin(board, player) {
  return winCombos.some(combo => combo.every(i => board[i] === player));
}

function checkTie() {
  return board.every(cell => typeof cell !== 'number');
}

function endGame(winner) {
  gameOver = true;
  if (winner === 'tie') {
    resultDiv.innerText = 'Tie Game!';
  } else {
    resultDiv.innerText = `${winner} wins!`;
  }
  restartBtn.style.display = 'inline-block';
}

function minimax(newBoard, player) {
  const availSpots = newBoard.filter(s => typeof s === 'number');

  if (checkWin(newBoard, humanPlayer)) {
    return { score: -10 };
  } else if (checkWin(newBoard, aiPlayer)) {
    return { score: 10 };
  } else if (availSpots.length === 0) {
    return { score: 0 };
  }

  const moves = [];

  for (let i = 0; i < availSpots.length; i++) {
    const move = {};
    move.index = newBoard[availSpots[i]];
    newBoard[availSpots[i]] = player;

    if (player === aiPlayer) {
      let result = minimax(newBoard, humanPlayer);
      move.score = result.score;
    } else {
      let result = minimax(newBoard, aiPlayer);
      move.score = result.score;
    }

    newBoard[availSpots[i]] = move.index;
    moves.push(move);
  }

  let bestMove;
  if (player === aiPlayer) {
    let bestScore = -Infinity;
    moves.forEach((m, i) => {
      if (m.score > bestScore) {
        bestScore = m.score;
        bestMove = i;
      }
    });
  } else {
    let bestScore = Infinity;
    moves.forEach((m, i) => {
      if (m.score < bestScore) {
        bestScore = m.score;
        bestMove = i;
      }
    });
  }

  return moves[bestMove];
}
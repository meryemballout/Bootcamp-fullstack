const questions = [
  {
    question: "Quelle est la capitale de la France ?",
    options: ["Paris", "Londres", "Berlin", "Madrid"],
    answer: 0,
  },
  {
    question: "Quelle couleur obtient-on en mélangeant le bleu et le jaune ?",
    options: ["Vert", "Orange", "Violet", "Rouge"],
    answer: 0,
  },
  {
    question: "Combien y a-t-il de continents sur Terre ?",
    options: ["4", "5", "6", "7"],
    answer: 3,
  },
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let timer;
const timeLimit = 15; // secondes

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const submitBtn = document.getElementById('submit-btn');
const feedbackEl = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
const usernameInput = document.getElementById('username');
const saveScoreBtn = document.getElementById('save-score-btn');
const leaderboardEl = document.getElementById('leaderboard');

function loadQuestion() {
  clearInterval(timer);
  feedbackEl.textContent = '';
  submitBtn.disabled = true;
  selectedOption = null;
  timerEl.textContent = '';

  const current = questions[currentQuestionIndex];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = '';

  current.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.addEventListener('click', () => selectOption(index, btn));
    optionsEl.appendChild(btn);
  });

  startTimer();
}

function selectOption(index, button) {
  selectedOption = index;
  Array.from(optionsEl.children).forEach(btn => btn.style.backgroundColor = '');
  button.style.backgroundColor = '#d0eaff';
  submitBtn.disabled = false;
}

submitBtn.addEventListener('click', () => {
  clearInterval(timer);
  checkAnswer();
});

function checkAnswer() {
  const current = questions[currentQuestionIndex];
  if (selectedOption === current.answer) {
    feedbackEl.textContent = "Bonne réponse ! 🎉";
    score++;
  } else {
    feedbackEl.textContent = `Mauvaise réponse... La bonne réponse était : "${current.options[current.answer]}"`;
  }
  scoreEl.textContent = `Score: ${score} / ${questions.length}`;
  submitBtn.disabled = true;

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setTimeout(loadQuestion, 2000);
  } else {
    setTimeout(showFinalScore, 2000);
  }
}

function showFinalScore() {
  questionEl.textContent = "Quiz terminé !";
  optionsEl.innerHTML = '';
  feedbackEl.textContent = '';
  submitBtn.style.display = 'none';
  timerEl.textContent = '';
  scoreEl.textContent = `Votre score final est ${score} sur ${questions.length}.`;
  saveScoreBtn.disabled = false;
}

function startTimer() {
  let timeLeft = timeLimit;
  timerEl.textContent = `Temps restant : ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Temps restant : ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      feedbackEl.textContent = "Temps écoulé !";
      submitBtn.disabled = true;
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        setTimeout(loadQuestion, 2000);
      } else {
        setTimeout(showFinalScore, 2000);
      }
    }
  }, 1000);
}

saveScoreBtn.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  if (!username) {
    alert('Veuillez entrer un pseudo.');
    return;
  }
  fetch('/score', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ username, score }),
  })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      saveScoreBtn.disabled = true;
      usernameInput.disabled = true;
      loadLeaderboard();
    })
    .catch(() => alert('Erreur lors de l\'enregistrement du score.'));
});

function loadLeaderboard() {
  fetch('/leaderboard')
    .then(res => res.json())
    .then(data => {
      leaderboardEl.innerHTML = '';
      data.forEach(({ username, score }) => {
        const li = document.createElement('li');
        li.textContent = `${username} : ${score}`;
        leaderboardEl.appendChild(li);
      });
    })
    .catch(() => {
      leaderboardEl.innerHTML = '<li>Impossible de charger le leaderboard.</li>';
    });
}

// Démarrage
loadQuestion();
scoreEl.textContent = `Score: ${score} / ${questions.length}`;
loadLeaderboard();

let quotes = [
  { id: 0, author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken.", likes: 0 },
  { id: 1, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.", likes: 0 },
  { id: 2, author: "Mae West", quote: "You only live once, but if you do it right, once is enough.", likes: 0 },
];

let lastQuoteId = null;
let currentQuote = null;

function generateQuote() {
  let random;
  do {
    random = Math.floor(Math.random() * quotes.length);
  } while (random === lastQuoteId);

  lastQuoteId = random;
  currentQuote = quotes[random];
  displayQuote(currentQuote);
}

function displayQuote(q) {
  document.getElementById("quoteDisplay").innerHTML =
    `"${q.quote}" - <strong>${q.author}</strong><br>Likes: ${q.likes}`;
}

function addQuote(event) {
  event.preventDefault();
  const quoteText = document.getElementById("newQuote").value;
  const authorText = document.getElementById("newAuthor").value;
  const newId = quotes.length;
  quotes.push({ id: newId, author: authorText, quote: quoteText, likes: 0 });
  document.getElementById("newQuote").value = "";
  document.getElementById("newAuthor").value = "";
  alert("Quote added!");
}

function countChars(includeSpaces) {
  if (!currentQuote) return;
  const count = includeSpaces
    ? currentQuote.quote.length
    : currentQuote.quote.replace(/\s/g, "").length;
  alert(`Character count: ${count}`);
}

function countWords() {
  if (!currentQuote) return;
  const words = currentQuote.quote.trim().split(/\s+/);
  alert(`Word count: ${words.length}`);
}

function likeQuote() {
  if (!currentQuote) return;
  currentQuote.likes++;
  displayQuote(currentQuote);
}

let filteredQuotes = [];
let currentFilteredIndex = 0;

function filterByAuthor(event) {
  event.preventDefault();
  const name = document.getElementById("authorFilter").value.trim().toLowerCase();
  filteredQuotes = quotes.filter(q => q.author.toLowerCase() === name);

  if (filteredQuotes.length === 0) {
    alert("No quotes found for this author.");
    return;
  }

  currentFilteredIndex = 0;
  currentQuote = filteredQuotes[currentFilteredIndex];
  displayQuote(currentQuote);
}

function nextFiltered() {
  if (filteredQuotes.length === 0) return;
  currentFilteredIndex = (currentFilteredIndex + 1) % filteredQuotes.length;
  currentQuote = filteredQuotes[currentFilteredIndex];
  displayQuote(currentQuote);
}

function prevFiltered() {
  if (filteredQuotes.length === 0) return;
  currentFilteredIndex =
    (currentFilteredIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
  currentQuote = filteredQuotes[currentFilteredIndex];
  displayQuote(currentQuote);
}

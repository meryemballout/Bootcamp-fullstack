import React, { useState, useEffect } from "react";
import quotes from "./QuotesDatabase";
import "./App.css";

function App() {
  const [currentQuote, setCurrentQuote] = useState({});
  const [usedQuotes, setUsedQuotes] = useState([]);
  const [bgColor, setBgColor] = useState("#3498db");

  const getRandomColor = () => {
    const colors = ["#3498db", "#e74c3c", "#2ecc71", "#9b59b6", "#f39c12", "#1abc9c"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getRandomQuote = () => {
    const unused = quotes.filter((q) => !usedQuotes.includes(q.quote));
    if (unused.length === 0) {
      setUsedQuotes([]);
      return getRandomQuote(); // recommence
    }
    const random = unused[Math.floor(Math.random() * unused.length)];
    setUsedQuotes((prev) => [...prev, random.quote]);
    setCurrentQuote(random);
    setBgColor(getRandomColor());
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <div className="quote-box">
        <h1 className="quote">“{currentQuote.quote}”</h1>
        <p className="author">— {currentQuote.author}</p>
        <button
          style={{ backgroundColor: bgColor }}
          onClick={getRandomQuote}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;

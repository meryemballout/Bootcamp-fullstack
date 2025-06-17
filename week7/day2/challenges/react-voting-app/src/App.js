import React, { useState } from "react";
import "./App.css";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const handleVote = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].votes += 1;
    setLanguages(updatedLanguages);
  };

  return (
    <div className="App">
      <h1>Vote For Your Favorite Language</h1>
      {languages.map((lang, index) => (
        <div key={lang.name} style={{ marginBottom: "1rem" }}>
          <span style={{ marginRight: "1rem" }}>
            {lang.name}: {lang.votes} votes
          </span>
          <button onClick={() => handleVote(index)}>Vote</button>
        </div>
      ))}
    </div>
  );
}

export default App;

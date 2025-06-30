import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

function AddTodo({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(AddTodo);

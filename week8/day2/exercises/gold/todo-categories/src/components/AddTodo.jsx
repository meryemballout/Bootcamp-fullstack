import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

function AddTodo({ categoryName, addTodo }) {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() === "") return;
    addTodo(categoryName, todoText.trim());
    setTodoText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "8px" }}>
      <input
        type="text"
        placeholder={`Ajouter todo à ${categoryName}`}
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default connect(null, { addTodo })(AddTodo);

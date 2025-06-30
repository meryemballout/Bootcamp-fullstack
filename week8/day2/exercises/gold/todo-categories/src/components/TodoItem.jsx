import React from "react";
import { connect } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/actions";

function TodoItem({ todo, categoryName, toggleTodo, removeTodo }) {
  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        cursor: "pointer",
        marginBottom: "4px",
      }}
    >
      <span onClick={() => toggleTodo(categoryName, todo.id)}>{todo.text}</span>
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => removeTodo(categoryName, todo.id)}
      >
        ❌
      </button>
    </li>
  );
}

export default connect(null, { toggleTodo, removeTodo })(TodoItem);

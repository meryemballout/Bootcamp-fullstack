import React from "react";
import { connect } from "react-redux";
import { toggleTodo, removeTodo } from "../redux/actions";

function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ margin: "10px 0" }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              marginLeft: "8px",
            }}
          >
            {todo.text}
          </span>
          <button
            onClick={() => removeTodo(todo.id)}
            style={{ marginLeft: "10px" }}
          >
            Supprimer
          </button>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  toggleTodo,
  removeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

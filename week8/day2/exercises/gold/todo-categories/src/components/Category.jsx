import React from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

function Category({ categoryName, todos }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>{categoryName}</h3>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} categoryName={categoryName} />
        ))}
      </ul>
      <AddTodo categoryName={categoryName} />
    </div>
  );
}

export default Category;

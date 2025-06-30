import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../features/todo/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
      <button onClick={() => dispatch(toggleTodo(todo.id))}>
        {todo.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
    </li>
  );
};

export default TodoItem;

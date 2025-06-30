// src/features/todos/todosThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
  const data = await response.json();
  return data.map(todo => ({
    id: todo.id,
    title: todo.title,
    completed: todo.completed,
  }));
});

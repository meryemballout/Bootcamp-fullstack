// src/features/todos/todosSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from './todosThunks';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    setTodos: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export const { addTodo, removeTodo, toggleTodo, setTodos } = todosSlice.actions;
export default todosSlice.reducer;

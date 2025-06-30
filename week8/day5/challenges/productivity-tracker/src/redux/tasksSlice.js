// src/redux/tasksSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, categoryId) {
        return {
          payload: {
            id: nanoid(),
            title,
            categoryId,
            completed: false,
          },
        };
      },
    },
    editTask(state, action) {
      const { id, title } = action.payload;
      const task = state.find((t) => t.id === id);
      if (task) task.title = title;
    },
    deleteTask(state, action) {
      return state.filter((t) => t.id !== action.payload);
    },
    toggleTask(state, action) {
      const task = state.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;

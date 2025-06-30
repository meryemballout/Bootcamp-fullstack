import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasksByDate: {}, // ex: { '2025-06-22': [{ id, text }] }
  selectedDate: new Date().toISOString().split('T')[0]
};

let idCounter = 0;

const plannerSlice = createSlice({
  name: 'planner',
  initialState,
  reducers: {
    selectDate(state, action) {
      state.selectedDate = action.payload;
    },
    addTask(state, action) {
      const { date, text } = action.payload;
      const task = { id: idCounter++, text };
      if (!state.tasksByDate[date]) {
        state.tasksByDate[date] = [];
      }
      state.tasksByDate[date].push(task);
    },
    editTask(state, action) {
      const { date, id, text } = action.payload;
      const tasks = state.tasksByDate[date];
      const task = tasks.find(t => t.id === id);
      if (task) task.text = text;
    },
    deleteTask(state, action) {
      const { date, id } = action.payload;
      state.tasksByDate[date] = state.tasksByDate[date].filter(t => t.id !== id);
    }
  }
});

export const { selectDate, addTask, editTask, deleteTask } = plannerSlice.actions;
export default plannerSlice.reducer;

// src/redux/tasksSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    // Exemple : '2025-06-22': [{id, text}, ...]
    tasksByDay: {},
    selectedDay: new Date().toISOString().slice(0, 10), // 'YYYY-MM-DD'
  },
  reducers: {
    setSelectedDay(state, action) {
      state.selectedDay = action.payload;
    },
    addTask: {
      reducer(state, action) {
        const { day, task } = action.payload;
        if (!state.tasksByDay[day]) state.tasksByDay[day] = [];
        state.tasksByDay[day].push(task);
      },
      prepare(day, text) {
        return {
          payload: {
            day,
            task: { id: nanoid(), text },
          },
        };
      },
    },
    editTask(state, action) {
      const { day, taskId, newText } = action.payload;
      const tasks = state.tasksByDay[day];
      if (tasks) {
        const task = tasks.find(t => t.id === taskId);
        if (task) task.text = newText;
      }
    },
    deleteTask(state, action) {
      const { day, taskId } = action.payload;
      const tasks = state.tasksByDay[day];
      if (tasks) {
        state.tasksByDay[day] = tasks.filter(t => t.id !== taskId);
      }
    },
  },
});

export const { setSelectedDay, addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;

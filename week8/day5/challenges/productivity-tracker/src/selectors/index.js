// src/selectors/index.js
import { createSelector } from 'reselect';

export const selectTasks = (state) => state.tasks;
export const selectCategories = (state) => state.categories;

export const selectTasksByCategory = (categoryId) =>
  createSelector([selectTasks], (tasks) =>
    tasks.filter((task) => task.categoryId === categoryId)
  );

export const selectCompletedTasks = createSelector([selectTasks], (tasks) =>
  tasks.filter((task) => task.completed).length
);

export const selectCategoryById = (categoryId) =>
  createSelector([selectCategories], (categories) =>
    categories.find((cat) => cat.id === categoryId)
  );

// Types d'actions
export const ADD_CATEGORY = "ADD_CATEGORY";
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

// Action creators
export const addCategory = (categoryName) => ({
  type: ADD_CATEGORY,
  payload: { categoryName },
});

export const addTodo = (categoryName, todoText) => ({
  type: ADD_TODO,
  payload: { categoryName, todoText },
});

export const toggleTodo = (categoryName, todoId) => ({
  type: TOGGLE_TODO,
  payload: { categoryName, todoId },
});

export const removeTodo = (categoryName, todoId) => ({
  type: REMOVE_TODO,
  payload: { categoryName, todoId },
});

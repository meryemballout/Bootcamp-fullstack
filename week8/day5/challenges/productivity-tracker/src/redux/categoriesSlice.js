// src/redux/categoriesSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    addCategory: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name) {
        return {
          payload: {
            id: nanoid(),
            name,
          },
        };
      },
    },
    editCategory(state, action) {
      const category = state.find((c) => c.id === action.payload.id);
      if (category) category.name = action.payload.name;
    },
    deleteCategory(state, action) {
      return state.filter((c) => c.id !== action.payload);
    },
  },
});

export const { addCategory, editCategory, deleteCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;

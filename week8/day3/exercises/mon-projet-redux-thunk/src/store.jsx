// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  // redux-thunk est inclus par défaut dans configureStore, tu n'as rien à faire
});

export default store;

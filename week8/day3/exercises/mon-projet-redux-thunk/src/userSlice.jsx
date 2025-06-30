// src/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk asynchrone pour fetcher les données utilisateurs
export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      return response.data;
    } catch (error) {
      // En cas d'erreur, on passe un payload custom à rejectWithValue
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUserData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Erreur inconnue';
      });
  },
});

export default userSlice.reducer;

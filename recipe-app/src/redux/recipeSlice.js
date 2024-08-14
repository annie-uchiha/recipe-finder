import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define async thunk for searching recipes
export const searchRecipes = createAsyncThunk('recipes/searchRecipes', async (query) => {
  const response = await axios.get(
    `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`
  );
  return response.data.hits;
});

// Define async thunk for fetching random recipes
export const fetchRandomRecipes = createAsyncThunk('recipes/fetchRandomRecipes', async () => {
  const response = await axios.get(
    `https://api.edamam.com/search?q=random&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`
  );
  return response.data.hits;
});

const recipeSlice = createSlice({
  name: 'recipes',
  initialState: {
    searchResults: [],
    randomRecipes: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchRecipes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchRecipes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.searchResults = action.payload;
      })
      .addCase(searchRecipes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchRandomRecipes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRandomRecipes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.randomRecipes = action.payload;
      })
      .addCase(fetchRandomRecipes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default recipeSlice.reducer;

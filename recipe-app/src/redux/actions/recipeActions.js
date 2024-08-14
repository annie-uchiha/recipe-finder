import axios from 'axios';

export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPE_SUCCESS';

const API_ID = process.env.REACT_APP_EDAMAM_APP_ID;
const API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;

export const fetchRandomRecipes = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`https://api.edamam.com/search?q=random&app_id=${API_ID}&app_key=${API_KEY}`);
      dispatch({ type: FETCH_RECIPES_SUCCESS, payload: res.data.hits });
    } catch (error) {
      console.error('Error fetching random recipes:', error);
    }
  };
};

export const fetchRecipe = (query) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
      dispatch({ type: FETCH_RECIPE_SUCCESS, payload: res.data.hits });
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  };
};

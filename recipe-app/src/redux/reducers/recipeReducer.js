const initialState = {
    recipes: [],
    selectedRecipe: null,
  };
  
  const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_RECIPES_SUCCESS':
        return {
          ...state,
          recipes: action.payload,
        };
      case 'FETCH_RECIPE_SUCCESS':
        return {
          ...state,
          selectedRecipe: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default recipeReducer;
  
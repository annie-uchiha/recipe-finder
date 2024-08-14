import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './components/Layout';
import RecipeCard from './components/RecipeCard';
import RecipePopup from './components/RecipePopup';
import { fetchRandomRecipes, fetchRecipe } from './redux/actions/recipeActions';

const App = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipe.recipes);
  const selectedRecipe = useSelector(state => state.recipe.selectedRecipe);
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(fetchRandomRecipes());
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(fetchRecipe(query));
  };

  return (
    <div>
      <Layout>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a recipe..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="recipe-grid">
          {recipes.map((recipe, index) => (
            <RecipeCard 
              key={index} 
              recipe={recipe} 
              onClick={() => dispatch({ type: 'FETCH_RECIPE_SUCCESS', payload: recipe })}
            />
          ))}
        </div>
        {selectedRecipe && (
          <RecipePopup 
            recipe={selectedRecipe} 
            onClose={() => dispatch({ type: 'FETCH_RECIPE_SUCCESS', payload: null })} 
          />
        )}
      </Layout>
    </div>
  );
};

export default App;

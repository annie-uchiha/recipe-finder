import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchRecipes } from './redux/recipeSlice';
import RecipePopup from './components/RecipePopup';
import RecipeCard from './components/RecipeCard';
import './App.css'; 

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.recipes.searchResults);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = () => {
    dispatch(searchRecipes(searchTerm));
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleClosePopup = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="layout">
      <header className="header">
        <h1>Recipe Finder</h1>
        <div className="search-bar">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for recipes..."
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </header>
      <main className="body-content">
        <div className="recipe-grid">
          {searchResults.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} onClick={handleRecipeClick} />
          ))}
        </div>
      </main>
      {selectedRecipe && (
        <RecipePopup recipe={selectedRecipe} onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default App;

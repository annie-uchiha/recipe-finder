import React from 'react';

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div className="recipe-card" onClick={onClick}>
      <img src={recipe.recipe.image} alt={recipe.recipe.label} />
      <h3>{recipe.recipe.label}</h3>
    </div>
  );
};

export default RecipeCard;

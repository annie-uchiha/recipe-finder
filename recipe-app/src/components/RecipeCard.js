import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe, onClick }) => {
  const { label, image } = recipe.recipe;

  return (
    <div className="recipe-card" onClick={() => onClick(recipe)}>
      <img src={image} alt={label} />
      <h3>{label}</h3>
    </div>
  );
};

export default RecipeCard;

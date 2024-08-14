import React from 'react';
import './RecipePopup.css';

const RecipePopup = ({ recipe, onClose }) => {
  const { label, image, ingredients, instructions } = recipe.recipe;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>Close</button>
        <h2>{label}</h2>
        <img src={image} alt={label} />
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.text}</li>
          ))}
        </ul>
        <h3>Instructions</h3>
        <p>{instructions}</p>
        <button onClick={() => {
          const blob = new Blob([`${label}\n\nIngredients:\n${ingredients.map(ingredient => ingredient.text).join('\n')}\n\nInstructions:\n${instructions}`], { type: 'text/plain' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${label}.txt`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }}>Download Recipe</button>
      </div>
    </div>
  );
};

export default RecipePopup;

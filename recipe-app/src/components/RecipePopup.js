import React from 'react';
import './RecipePopup.css'; 

const RecipePopup = ({ recipe, onClose }) => {

  if (!recipe) {
    return null; 
  }

  const recipeDetails = recipe.recipe || recipe;

  const { label, image, ingredients, instructions } = recipeDetails;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>Close</button>
        <h2>{label}</h2>
        <img src={image} alt={label} />
        <h3>Ingredients</h3>
        <ul>
          {ingredients && ingredients.length > 0 ? (
            ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.text}</li>
            ))
          ) : (
            <p>No ingredients available.</p>
          )}
        </ul>
        <h3>Instructions</h3>
        <p>{instructions || "No instructions available."}</p>
        <button onClick={() => {
          const blob = new Blob([`${label}\n\nIngredients:\n${ingredients ? ingredients.map(ingredient => ingredient.text).join('\n') : 'No ingredients available.'}\n\nInstructions:\n${instructions || 'No instructions available.'}`], { type: 'text/plain' });
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

import React from 'react';

const RecipePopup = ({ recipe, onClose }) => {
  const downloadRecipe = () => {
    const element = document.createElement("a");
    const file = new Blob([recipe.recipe.ingredientLines.join('\n')], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${recipe.recipe.label}.txt`;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="recipe-popup">
      <button onClick={onClose}>Close</button>
      <h2>{recipe.recipe.label}</h2>
      <img src={recipe.recipe.image} alt={recipe.recipe.label} />
      <ul>
        {recipe.recipe.ingredientLines.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
      <button onClick={downloadRecipe}>Download Recipe</button>
    </div>
  );
};

export default RecipePopup;

import React from "react";

function RecipeCard({ recipe, onRecipeClick }) {
  return (
    <div
      onClick={() => onRecipeClick(recipe.id)}
      className="recipe-card"
    >
      <div className="card-img-wrapper">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="card-img"
        />
      </div>
      <h3 className="font-display card-title">{recipe.name}</h3>
      <div className="card-meta">
        <span className="meta-text">{recipe.cuisine}</span>
        <span className="meta-text">{recipe.difficulty}</span>
      </div>
    </div>
  );
}

export default RecipeCard;

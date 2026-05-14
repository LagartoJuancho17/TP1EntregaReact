import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeGrid({ recipes, onRecipeClick }) {
  return (
    <section className="explore-section container-7xl">
      <h2 className="font-display section-title">Ver Más</h2>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard 
            key={recipe.id} 
            recipe={recipe} 
            onRecipeClick={onRecipeClick} 
          />
        ))}
      </div>
    </section>
  );
}

export default RecipeGrid;

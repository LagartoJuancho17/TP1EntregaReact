import React from "react";

function Hero({ heroRecipe, accentColor, onRecipeClick }) {
  if (!heroRecipe) return null;

  return (
    <>
      <div className="hero-image-col">
        <div className="hero-image-wrapper">
          <div className="oval-mask">
            <img
              src={heroRecipe.image}
              alt={heroRecipe.name}
              className="hero-image"
            />
          </div>
        </div>
      </div>

      <div className="hero-text-col">
        <h1
          className="font-display hero-title"
          style={{ color: accentColor }}
        >
          {heroRecipe.name}
        </h1>
        <div className="hero-info-group">
          <h3 className="info-label">Ingredientes</h3>
          <ul className="ingredients-list">
            {heroRecipe.ingredients.slice(0, 4).map((ing, i) => (
              <li key={i}>• {ing}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => onRecipeClick(heroRecipe.id)}
          className="btn-secondary"
        >
          Ver receta completa
        </button>
      </div>
    </>
  );
}

export default Hero;

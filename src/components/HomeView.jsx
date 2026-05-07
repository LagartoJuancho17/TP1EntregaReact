import React, { useState, useEffect } from "react";

function HomeView({ recipes, onRecipeClick }) {
  const [heroRecipe, setHeroRecipe] = useState(null);
  const accentColors = ["#a31d1d", "#d4a017", "#5b8fb9", "#c07a7a"];

  // Primera Receta en el HERO
  useEffect(() => {
    if (recipes.length > 0 && !heroRecipe) {
      setHeroRecipe(recipes[0]);
    }
  }, [recipes]);

  if (recipes.length === 0) return <div className="loader">Cargando...</div>; // Si no hay recetas, muestra esto

  return (
    <main className="home-view">
      {/* SECCIÓN HERO */}
      {heroRecipe && (
        <section className="hero-section">
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
              style={{ color: accentColors[0] }}
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

          <div className="hero-side-col">
            <div className="side-list-container custom-scrollbar">
              {recipes.map((r, idx) => (
                <div
                  key={r.id}
                  className={`side-item ${heroRecipe.id === r.id ? "active" : ""}`}
                  style={{
                    "--item-color": accentColors[idx % accentColors.length],
                  }}
                  onClick={() => setHeroRecipe(r)}
                >
                  <div className="side-item-img-wrapper">
                    <img src={r.image} alt={r.name} className="side-item-img" />
                  </div>
                  <div>
                    <h4 className="font-display side-item-title">{r.name}</h4>
                    <p className="side-item-meta">Receta</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECCIÓN GRILLA */}
      <section className="explore-section container-7xl">
        <h2 className="font-display section-title">Ver Más</h2>
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
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
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomeView;

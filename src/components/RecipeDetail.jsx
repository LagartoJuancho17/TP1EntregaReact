import React, { useState, useEffect } from "react";

function RecipeDetail({ recipeId, onBack }) {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRecipe();
  }, [recipeId]);

  if (loading) {
    return <div style={{ padding: '8rem 2rem', textAlign: 'center', fontWeight: 'bold' }}>Cargando receta...</div>;
  }

  if (!recipe) {
    return <div style={{ padding: '8rem 2rem', textAlign: 'center' }}>Receta no encontrada</div>;
  }

  return (
    <div className="container-7xl detail-view" style={{ display: 'block', opacity: 1, margin: '0 auto' }}>
      <button onClick={onBack} className="back-btn">← Volver</button>
      
      <div className="detail-grid">
        <div className="detail-img-wrapper">
          <img src={recipe.image} alt={recipe.name} className="detail-img" />
        </div>
        
        <div className="detail-content">
          <div className="tag-list">
            {recipe.tags?.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
          
          <h1 className="font-display detail-title">{recipe.name}</h1>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-label">Dificultad</div>
              <div className="stat-value">{recipe.difficulty}</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Tiempo Prep</div>
              <div className="stat-value">{recipe.prepTimeMinutes} min</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Calorías</div>
              <div className="stat-value">{recipe.caloriesPerServing} kcal</div>
            </div>
          </div>
          
          <div className="ingredients-section">
            <h3 className="section-subtitle">Ingredientes</h3>
            <ul className="detail-ingredients-list">
              {recipe.ingredients?.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="instructions-section">
        <h2 className="font-display instructions-title">Instrucciones</h2>
        <div className="instruction-steps">
          {recipe.instructions?.map((step, i) => (
            <div key={i} className="instruction-step">
              <span className="font-display step-number">{i + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;

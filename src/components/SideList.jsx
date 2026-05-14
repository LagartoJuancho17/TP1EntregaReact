import React from "react";

function SideList({ recipes, heroRecipe, setHeroRecipe, accentColors }) {
  return (
    <div className="hero-side-col">
      <div className="side-list-container custom-scrollbar">
        {recipes.map((r, idx) => (
          <div
            key={r.id}
            className={`side-item ${heroRecipe?.id === r.id ? "active" : ""}`}
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
  );
}

export default SideList;

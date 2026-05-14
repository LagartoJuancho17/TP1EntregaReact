import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import SideList from "../components/SideList";
import RecipeGrid from "../components/RecipeGrid";

function HomeContainer({ onRecipeClick }) {
  const [recipes, setRecipes] = useState([]);
  const [heroRecipe, setHeroRecipe] = useState(null);
  const accentColors = ["#a31d1d", "#d4a017", "#5b8fb9", "#c07a7a"];

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch("https://dummyjson.com/recipes?limit=10");
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error("ERROR EN CARGA DE RECETAS", error);
      }
    }
    fetchRecipes();
  }, []);

  useEffect(() => {
    if (recipes.length > 0 && !heroRecipe) {
      setHeroRecipe(recipes[0]);
    }
  }, [recipes, heroRecipe]);

  if (recipes.length === 0) return <div className="loader">Cargando...</div>;

  return (
    <main className="home-view">
      {heroRecipe && (
        <section className="hero-section">
          <Hero 
            heroRecipe={heroRecipe} 
            accentColor={accentColors[0]} 
            onRecipeClick={onRecipeClick} 
          />
          <SideList 
            recipes={recipes} 
            heroRecipe={heroRecipe} 
            setHeroRecipe={setHeroRecipe} 
            accentColors={accentColors} 
          />
        </section>
      )}
      <RecipeGrid recipes={recipes} onRecipeClick={onRecipeClick} />
    </main>
  );
}

export default HomeContainer;

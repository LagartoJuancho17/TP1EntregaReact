// App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView";
import "./styles.css";

function App() {
  const [currentView, setCurrentView] = useState("home"); //Home o detail
  const [activeRecipeId, setActiveRecipeId] = useState(); //Id de la receta elegida

  const handleShowDetail = (id) => {
    //Función para mostrar detalle de la receta
    setActiveRecipeId(id);
    setCurrentView("detail");
  };

  const handleShowHome = () => {
    //Función para volver al inicio
    setActiveRecipeId(null);
    setCurrentView("home");
  };

  const [recipes, setRecipes] = useState([]); //Array de recetas

  useEffect(() => {
    //Función para obtener las recetas de la API
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

  //Renderizado condicional
  return (
    <>
      {/* El Navbar siempre se muestra arriba */}
      <Navbar onHomeClick={handleShowHome} />

      {/* Renderizado Condicional: 
          Si currentView es 'home', mostramos <HomeView />. 
          Si es 'detail', mostramos <DetailView /> */}

      {currentView === "home" && (
        <HomeView recipes={recipes} onRecipeClick={handleShowDetail} />
      )}
    </>
  );
}

export default App;

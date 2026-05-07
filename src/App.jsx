// App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView";
import "./styles.css";

function App() {
  // 1. EL ESTADO (La memoria de tu app)
  // currentView puede ser 'home' o 'detail'
  const [currentView, setCurrentView] = useState("home");
  // activeRecipeId guarda el ID de la receta que queremos ver en detalle
  const [activeRecipeId, setActiveRecipeId] = useState();

  // 2. FUNCIONES DE NAVEGACIÓN
  // Estas funciones reemplazan tus document.getElementById('...').style.display
  const handleShowDetail = (id) => {
    setActiveRecipeId(id);
    setCurrentView("detail");
  };

  const handleShowHome = () => {
    setActiveRecipeId(null);
    setCurrentView("home");
  };

  const [recipes, setRecipes] = useState([]);

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

  // 3. LO QUE SE DIBUJA (El Render / JSX)
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

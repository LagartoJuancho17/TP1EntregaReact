import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HomeContainer from "./containers/HomeContainer";
import AboutPage from "./About/page";
import "./styles.css";

import RecipeDetail from "./components/RecipeDetail";

function App() {
  const [currentView, setCurrentView] = useState("home");
  const [activeRecipeId, setActiveRecipeId] = useState(null);

  const handleShowDetail = (id) => {
    setActiveRecipeId(id);
    setCurrentView("detail");
  };

  const handleShowHome = () => {
    setActiveRecipeId(null);
    setCurrentView("home");
  };

  const handleShowAbout = () => {
    setActiveRecipeId(null);
    setCurrentView("about");
  };

  return (
    <>
      <Navbar onHomeClick={handleShowHome} onAboutClick={handleShowAbout} />

      {currentView === "home" && (
        <HomeContainer onRecipeClick={handleShowDetail} />
      )}
      
      {currentView === "about" && (
        <AboutPage />
      )}

      {currentView === "detail" && (
        <RecipeDetail recipeId={activeRecipeId} onBack={handleShowHome} />
      )}
    </>
  );
}

export default App;

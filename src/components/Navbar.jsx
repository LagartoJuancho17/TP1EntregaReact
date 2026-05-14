import React from "react";

function Navbar({ onHomeClick, onAboutClick }) {
  return (
    <nav className="main-nav">
      <div className="nav-content">
        <div className="nav-links">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onHomeClick();
            }}
            className="nav-link nav-link-accent"
          >
            Recetas
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onAboutClick();
            }}
            className="nav-link"
          >
            About
          </a>
        </div>
        <div className="nav-logo font-display">Drillot Recetas</div>
      </div>
    </nav>
  );
}

export default Navbar;

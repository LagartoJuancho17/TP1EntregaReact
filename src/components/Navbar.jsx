import React from "react";

function Navbar({ onHomeClick }) {
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
        </div>
        <div className="nav-logo font-display">Drillot Recetas</div>
      </div>
    </nav>
  );
}

export default Navbar;

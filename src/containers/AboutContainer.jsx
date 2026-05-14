import React from "react";

function AboutContainer() {
  return (
    <main className="about-view" style={{ padding: '40px', textAlign: 'center' }}>
      <h1 className="font-display" style={{ color: '#a31d1d', marginBottom: '20px' }}>Acerca de Nosotros</h1>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
        Bienvenido a Drillot Recetas. Nuestra misión es compartir las mejores recetas para que puedas 
        cocinar platillos deliciosos en casa. Todas nuestras recetas son cuidadosamente seleccionadas.
      </p>
    </main>
  );
}

export default AboutContainer;

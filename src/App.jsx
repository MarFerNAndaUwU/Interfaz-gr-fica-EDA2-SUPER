import './App.css';
import React from 'react';

function App() {
  return (
    <div className="container py-4">
      {/* Encabezado Principal */}
      <header className="border-bottom lh-1 py-3 mb-4">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 text-center mx-auto">
            <h1 className="blog-header-logo text-body-emphasis text-decoration-none fw-bold">
              Chatbot EDA II
            </h1>
          </div>
        </div>
      </header>

      {/* Navegación (Lo que hará el Miembro 2) */}
      <div className="nav-scroller py-1 mb-3 border-bottom">
        <nav className="nav nav-underline justify-content-between">
          <a className="nav-item nav-link link-body-emphasis active" href="#">Inicio</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">Algoritmos</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">Documentación</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">Nosotros</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">Ponganse a chambear cabrones</a>

        </nav>
      </div>
      
      <div className="text-center"> {/* Esto centra la imagen */}
  <img 
    src="https://static.wikia.nocookie.net/aesthetics/images/5/5f/Asadal_design_graphics.jpg" 
    alt="Asadal Design" 
    className="rounded shadow-lg mb-4" 
    style={{ 
      width: 'auto',        /* No deja que se estire a la fuerza */
      maxWidth: '600px',    /* Tú puedes bajar este número (ej. 500px) para que se vea menos pixeleada */
      height: 'auto',       /* Mantiene la proporción original */
      border: '4px solid rgba(255, 255, 255, 0.7)' 
    }} 
  />
</div>

      {/* Sección Destacada (Lo que hará el Miembro 3) */}
      <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        <div className="col-lg-6 px-0">
          <h1 className="display-4 fst-italic">Visualizador de Estructuras de Datos</h1>
          <p className="lead my-3">Bienvenida al chatbot diseñado para ayudarte a entender la lógica de EDA II de forma interactiva.</p>
        </div>
      </div>

      <div className="row g-5">
        {/* Columna del Chat (Lo que hará el Miembro 4) */}
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">
            Conversación con el Bot
          </h3>
          <div className="p-5 mb-4 bg-light rounded-3 border">
            <p className="fs-5">Bot: ¡Hola! ¿En qué algoritmo puedo ayudarte hoy?</p>
          </div>
        </div>

        {/* Barra Lateral (Lo que hará el Miembro 5) */}
        <div className="col-md-4">
          <div className="position-sticky" style={{ top: '2rem' }}>
            <div className="p-4 mb-3 bg-body-tertiary rounded">
              <h4 className="fst-italic">Historial</h4>
              <p className="mb-0">Aquí tus compañeros podrán ver los chats guardados anteriormente.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
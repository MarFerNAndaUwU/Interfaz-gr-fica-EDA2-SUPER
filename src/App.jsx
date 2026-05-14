import './App.css';
import React, { useState } from 'react'; // 1. Importamos useState para la "memoria"

function App() {
  // 2. Definimos el "estado". 'mensaje' es lo que se escribe, 'setMensaje' es la función para cambiarlo.
  const [mensaje, setMensaje] = useState('');
  const [chatLog, setChatLog] = useState([
    { rol: 'bot', texto: '¡Hola! ¿En qué algoritmo puedo ayudarte hoy?' }
  ]);

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!mensaje.trim()) return;

    // Agregamos el mensaje del usuario al historial
    setChatLog([...chatLog, { rol: 'usuario', texto: mensaje }]);
    setMensaje(''); // Limpiamos el cuadro de texto
  };

  return (
    <div className="container py-4">
      {/* Encabezado y Navegación (Se mantienen igual) */}
      <header className="border-bottom lh-1 py-3 mb-4">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 text-center mx-auto">
            <h1 className="blog-header-logo text-body-emphasis text-decoration-none fw-bold">
              Chatbot EDA II
            </h1>
          </div>
        </div>
      </header>

      <div className="nav-scroller py-1 mb-3 border-bottom">
        <nav className="nav nav-underline justify-content-between">
          <a className="nav-item nav-link link-body-emphasis active" href="#">Inicio</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">Algoritmos</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">Documentación</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">Nosotros</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">¡A trabajar!</a>
        </nav>
      </div>

      {/* Imagen y Sección Destacada */}
      <div className="text-center">
        <img 
          src="https://static.wikia.nocookie.net/aesthetics/images/5/5f/Asadal_design_graphics.jpg" 
          alt="Asadal Design" 
          className="rounded shadow-lg mb-4" 
          style={{ maxWidth: '600px', height: 'auto', border: '4px solid rgba(255, 255, 255, 0.7)' }} 
        />
      </div>

      <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
        <div className="col-lg-6 px-0">
          <h1 className="display-4 fst-italic">Visualizador de Estructuras de Datos</h1>
          <p className="lead my-3">Bienvenida al chatbot diseñado para ayudarte a entender la lógica de EDA II de forma interactiva.</p>
        </div>
      </div>

      <div className="row g-5">
        {/* Columna del Chat (Tu área principal) */}
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">Conversación con el Bot</h3>
          
          {/* Caja de historial de mensajes */}
          <div className="p-3 mb-4 bg-light rounded-3 border" style={{ height: '300px', overflowY: 'scroll' }}>
            {chatLog.map((chat, index) => (
              <div key={index} className={`mb-2 p-2 rounded ${chat.rol === 'bot' ? 'bg-info-subtle' : 'bg-white border'}`}>
                <strong>{chat.rol === 'bot' ? 'Bot: ' : 'Tú: '}</strong> {chat.texto}
              </div>
            ))}
          </div>

          {/* Formulario para escribir (Interacción básica) */}
          <form onSubmit={manejarEnvio} className="d-flex gap-2">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Pregunta sobre búsqueda binaria, grafos..." 
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>

        {/* Barra Lateral (Historial) */}
        <div className="col-md-4">
          <div className="position-sticky" style={{ top: '2rem' }}>
            <div className="p-4 mb-3 bg-body-tertiary rounded">
              <h4 className="fst-italic">Historial de Temas</h4>
              <ul className="list-unstyled">
                <li>• Algoritmos de Búsqueda</li>
                <li>• Ordenamiento (Sorting)</li>
                <li>• Árboles y Grafos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
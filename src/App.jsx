import './App.css';
import React, { useState } from 'react'; // 1. Importamos useState para la "memoria"
import miniRodri from './assets/minirodri.png';

function App() {

  // 2. Definimos el "estado". 'mensaje' es lo que se escribe, 'setMensaje' es la función para cambiarlo.
  const [mensaje, setMensaje] = useState('');

  const [chatLog, setChatLog] = useState([
    { rol: 'bot', texto: '¡Hola! Soy MiniRodri 🍏 ¿En qué algoritmo puedo ayudarte hoy?' }
  ]);

  // 3. Estados para controlar la ventana del chatbot
  const [chatAbierto, setChatAbierto] = useState(false);
  const [chatExpandido, setChatExpandido] = useState(false);

  // 4. Función para enviar mensajes
  const manejarEnvio = (e) => {
    e.preventDefault();

    if (!mensaje.trim()) return;

    // Agregamos el mensaje del usuario al historial
    const nuevoHistorial = [
      ...chatLog,
      { rol: 'usuario', texto: mensaje }
    ];

    setChatLog(nuevoHistorial);

    // Respuestas básicas simuladas
    let respuestaBot = 'Tengo información sobre algoritmos, grafos y estructuras 😊';

    if (mensaje.toLowerCase().includes('merge')) {
      respuestaBot = 'Merge Sort divide el arreglo en partes pequeñas y luego las ordena.';
    }

    if (mensaje.toLowerCase().includes('quick')) {
      respuestaBot = 'Quick Sort usa un pivote para ordenar los elementos.';
    }

    if (mensaje.toLowerCase().includes('árbol')) {
      respuestaBot = 'Los árboles son estructuras jerárquicas con nodos y ramas.';
    }

    if (mensaje.toLowerCase().includes('grafos')) {
      respuestaBot = 'Los grafos conectan nodos mediante aristas.';
    }

    setTimeout(() => {
      setChatLog((prevChat) => [
        ...prevChat,
        { rol: 'bot', texto: respuestaBot }
      ]);
    }, 500);

    setMensaje('');
  };

  // 5. Función para borrar el historial al cerrar
  const cerrarChat = () => {
    setChatAbierto(false);

    setChatLog([
      { rol: 'bot', texto: '¡Hola! Soy MiniRodri 🍏 ¿En qué algoritmo puedo ayudarte hoy?' }
    ]);
  };

  return (

    <div className="container py-4">

      {/* Encabezado Principal */}
      <header className="hero-window mb-4">

        {/* Barra tipo Windows Vista */}
        <div className="window-top-bar">

          <div className="window-buttons-left">
            <button className="vista-circle-btn">◀</button>
            <button className="vista-circle-btn">▶</button>
          </div>

          <div className="window-search">
            <input
              type="text"
              placeholder="Buscar algoritmos..."
              className="form-control"
            />
          </div>

        </div>

        {/* Contenido Principal */}
        <div className="hero-content text-center">

          <img
            src={miniRodri}
            alt="MiniRodri"
            className="mini-rodri-main"
          />

          <h1 className="main-title">
            MiniRodri <br />
            EDA II
          </h1>

          <p className="main-subtitle">
            Visualizador interactivo de algoritmos,
            estructuras de datos y chatbot inteligente.
          </p>

        </div>

      </header>

      {/* Navegación Superior */}
      <div className="nav-scroller py-2 mb-4 vista-navbar">

        <nav className="nav justify-content-between">

          <a className="nav-item nav-link active vista-link" href="#">
            Inicio
          </a>

          <a className="nav-item nav-link vista-link" href="#">
            Algoritmos
          </a>

          <a className="nav-item nav-link vista-link" href="#">
            Documentación
          </a>

          <a className="nav-item nav-link vista-link" href="#">
            Nosotros
          </a>

          <a className="nav-item nav-link vista-link" href="#">
            ¡A trabajar!
          </a>

        </nav>

      </div>

      {/* Imagen Principal */}
      <div className="text-center mb-4">

        <img
          src="https://static.wikia.nocookie.net/aesthetics/images/5/5f/Asadal_design_graphics.jpg"
          alt="Frutiger Aero"
          className="hero-image"
        />

      </div>

      {/* Tarjeta Principal */}
      <div className="presentation-card mb-5">

        <div className="row align-items-center">

          <div className="col-md-7">

            <h1 className="presentation-title">
              Visualizador de <br />
              Estructuras de Datos
            </h1>

            <p className="presentation-text">
              Bienvenido a MiniRodri 🍏, el asistente visual
              del proyecto EDA II.
              Aprende algoritmos, árboles, grafos,
              ordenamientos y más de forma interactiva.
            </p>

          </div>

          <div className="col-md-5 text-center">

            <img
              src={miniRodri}
              alt="MiniRodri"
              className="presentation-rodri"
            />

          </div>

        </div>

      </div>

      {/* Sección Principal */}
      <div className="row g-5">

        {/* Columna Principal */}
        <div className="col-md-8">

          <h3 className="section-title">
            Conversación con MiniRodri
          </h3>

          <div className="chat-preview-card">

            <img
              src={miniRodri}
              alt="MiniRodri"
              className="chat-preview-img"
            />

            <h4 className="chat-preview-title">
              ¿Necesitas ayuda?
            </h4>

            <p className="chat-preview-text">
              MiniRodri puede ayudarte con:
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">

              <button className="btn btn-primary">
                Ver algoritmos
              </button>

              <button className="btn btn-info">
                Árboles
              </button>

              <button className="btn btn-success">
                Grafos
              </button>

              <button className="btn btn-warning">
                Sorting
              </button>

            </div>

            <button
              className="btn btn-light btn-lg open-chat-btn"
              onClick={() => setChatAbierto(true)}
            >
              Abrir ChatBot
            </button>

          </div>

        </div>

        {/* Barra Lateral */}
        <div className="col-md-4">

          <div className="sidebar-card">

            <h4 className="sidebar-title">
              Temas Disponibles
            </h4>

            <ul className="list-unstyled">

              <li>• Merge Sort</li>
              <li>• Quick Sort</li>
              <li>• Árboles Binarios</li>
              <li>• Grafos</li>
              <li>• Complejidad O(n)</li>

            </ul>

          </div>

        </div>

      </div>

      {/* BOTÓN FLOTANTE */}
      {!chatAbierto && (

        <button
          className="floating-chat-button"
          onClick={() => setChatAbierto(true)}
        >

          <img
            src={miniRodri}
            alt="MiniRodri"
            className="floating-chat-image"
          />

          <span>
            ¿Necesitas ayuda?
          </span>

        </button>

      )}

      {/* VENTANA DEL CHATBOT */}
      {chatAbierto && (

        <div className={`chat-window ${chatExpandido ? 'expanded-chat' : ''}`}>

          {/* Barra Superior */}
          <div className="chat-window-header">

            <div className="d-flex align-items-center gap-2">

              <img
                src={miniRodri}
                alt="MiniRodri"
                className="chat-header-image"
              />

              <span className="fw-bold">
                MiniRodri Bot
              </span>

            </div>

            <div className="d-flex gap-2">

              {/* Minimizar */}
              <button
                className="window-action-btn"
                onClick={() => setChatAbierto(false)}
              >
                —
              </button>

              {/* Expandir */}
              <button
                className="window-action-btn"
                onClick={() => setChatExpandido(!chatExpandido)}
              >
                □
              </button>

              {/* Cerrar */}
              <button
                className="window-action-btn close-btn"
                onClick={cerrarChat}
              >
                ✕
              </button>

            </div>

          </div>

          {/* Contenido */}
          <div className="chat-window-body">

            <div className="text-center mb-3">

              <img
                src={miniRodri}
                alt="MiniRodri"
                className="chat-main-image"
              />

              <h5 className="mt-2">
                Hola 👋 Soy MiniRodri
              </h5>

              <p className="small">
                ¿Qué necesitas aprender hoy?
              </p>

            </div>

            {/* Botones interactivos */}
            <div className="d-grid gap-2 mb-3">

              <button className="btn btn-primary">
                Ver algoritmos
              </button>

              <button className="btn btn-info">
                Pregunta sobre un algoritmo
              </button>

              <button className="btn btn-success">
                Funcionamiento de estructuras
              </button>

              <button className="btn btn-warning">
                ¿Quiénes somos?
              </button>

              <button className="btn btn-secondary">
                Otra pregunta
              </button>

            </div>

            {/* Historial */}
            <div className="chat-history">

              {chatLog.map((chat, index) => (

                <div
                  key={index}
                  className={`chat-message ${
                    chat.rol === 'bot'
                      ? 'bot-message'
                      : 'user-message'
                  }`}
                >

                  <strong>
                    {chat.rol === 'bot'
                      ? 'MiniRodri: '
                      : 'Tú: '}
                  </strong>

                  {chat.texto}

                </div>

              ))}

            </div>

            {/* Input */}
            <form
              onSubmit={manejarEnvio}
              className="d-flex gap-2 mt-3"
            >

              <input
                type="text"
                className="form-control"
                placeholder="Escribe tu pregunta..."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              />

              <button
                type="submit"
                className="btn btn-primary"
              >
                Enviar
              </button>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;
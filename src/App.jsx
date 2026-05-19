<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

function App() {
=======
import './App.css';
import React, { useState } from 'react'; // 1. Importamos useState para la "memoria"
import miniRodri from './assets/minirodri.png';

function App() {

  // 2. Definimos el "estado". 'mensaje' es lo que se escribe, 'setMensaje' es la función para cambiarlo.
>>>>>>> c24b6578f6279719dfdca77355659cbcdc83295c
  const [mensaje, setMensaje] = useState('');

  const [chatLog, setChatLog] = useState([
<<<<<<< HEAD
    {
      rol: 'bot',
      texto: '¡Hola! ¿En qué algoritmo puedo ayudarte hoy?'
    }
=======
    { rol: 'bot', texto: '¡Hola! Soy MiniRodri 🍏 ¿En qué algoritmo puedo ayudarte hoy?' }
>>>>>>> c24b6578f6279719dfdca77355659cbcdc83295c
  ]);

  // 3. Estados para controlar la ventana del chatbot
  const [chatAbierto, setChatAbierto] = useState(false);
  const [chatExpandido, setChatExpandido] = useState(false);

  // 4. Función para enviar mensajes
  const manejarEnvio = (e) => {
    e.preventDefault();

    if (!mensaje.trim()) return;

<<<<<<< HEAD
    setChatLog([
      ...chatLog,
      {
        rol: 'usuario',
        texto: mensaje
      }
    ]);

    setMensaje('');
=======
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
>>>>>>> c24b6578f6279719dfdca77355659cbcdc83295c
  };

  /* Cargar Bootstrap para la previsualización interactiva */
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
<<<<<<< HEAD
    <div>
      {/* ================= ESTILOS CSS UNIFICADOS (Soluciona el error de compilación) ================= */}
      <style>{`
        :root {
          --fa-glass: rgba(255, 255, 255, 0.4);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          background: linear-gradient(135deg, hsl(119, 75%, 69%) 0%, #5a8eff 100%) !important;
          background-attachment: fixed;
          min-height: 100vh;
          font-family: Arial, Helvetica, sans-serif;
        }

        /* Tarjetas con efecto Cristal */
        .glass-card {
          background: var(--fa-glass) !important;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.6) !important;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        }

        .container {
          position: relative;
          z-index: 1;
          border: none !important;
        }

        /* Checkbox del menú oculto */
        .menu-icon:checked,
        .menu-icon:not(:checked) {
          position: absolute;
          left: -9999px;
        }

        /* Botón de hamburguesa */
        .menu-icon + label {
          position: fixed;
          top: 25px;
          right: 25px;
          width: 35px;
          height: 35px;
          z-index: 300;
          cursor: pointer;
        }

        /* Líneas del botón */
        .menu-icon + label::before,
        .menu-icon + label::after {
          content: '';
          position: absolute;
          width: 35px;
          height: 3px;
          background: black;
          left: 0;
          transition: 0.3s;
        }

        .menu-icon + label::before {
          top: 10px;
          box-shadow: 0 10px 0 black;
        }

        .menu-icon + label::after {
          top: 30px;
        }

        /* Caja de navegación del menú */
        .menu-nav {
          position: fixed;
          top: 20px;
          right: 20px;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          overflow: hidden;
          transition: 0.4s ease;
          z-index: 200;
          border: 1px solid rgba(255, 255, 255, 0.4) !important;
        }

        /* Estado del menú abierto */
        .menu-icon:checked ~ .menu-nav {
          width: 200px;
          height: 240px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.8);
        }

        /* Lista de enlaces */
        .menu-nav ul {
          list-style: none;
          padding: 55px 0 0 0;
          margin: 0;
          text-align: center;
        }

        .menu-nav ul li {
          margin: 12px 0;
        }

        .menu-nav ul li a {
          text-decoration: none;
          color: black;
          font-size: 20px;
          font-weight: bold;
          transition: 0.3s;
        }

        .menu-nav ul li a:hover {
          color: #0d6efd;
        }

        /* Transformación a 'X' de cierre */
        .menu-icon:checked + label::before {
          top: 18px;
          box-shadow: none;
          transform: rotate(45deg);
        }

        .menu-icon:checked + label::after {
          top: 18px;
          transform: rotate(-45deg);
        }

        /* Clases auxiliares */
        .blog-header-logo {
          font-size: 3rem;
          color: #1a365d;
        }

        .main-image {
          max-width: 600px;
          width: 100%;
          height: auto;
          border: 4px solid rgba(255, 255, 255, 0.7);
        }

        .chat-container {
          height: 320px;
          overflow-y: scroll;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(8px);
        }
      `}</style>

      {/* ================= MENU DESPLEGABLE CON CSS PURO ================= */}
      <input
        className="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label htmlFor="menu-icon"></label>

      <nav className="menu-nav">
        <ul>
          <li><a href="#inicio" onClick={() => { document.getElementById('menu-icon').checked = false; }}>Inicio</a></li>
          <li><a href="#algoritmos" onClick={() => { document.getElementById('menu-icon').checked = false; }}>Algoritmos</a></li>
          <li><a href="#documentacion" onClick={() => { document.getElementById('menu-icon').checked = false; }}>Documentación</a></li>
          <li><a href="#contacto" onClick={() => { document.getElementById('menu-icon').checked = false; }}>Contacto</a></li>
        </ul>
      </nav>

      {/* ================= CONTENIDO PRINCIPAL ================= */}
      <div
        id="inicio"
        className="container py-4"
      >
        {/* ================= ENCABEZADO ================= */}
        <header className="border-bottom lh-1 py-3 mb-4">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-12 text-center mx-auto">
              <h1 className="blog-header-logo text-body-emphasis text-decoration-none fw-bold">
                Chatbot EDA II
              </h1>
            </div>
          </div>
        </header>

        {/* ================= IMAGEN DESTACADA ================= */}
        <div className="text-center">
          <img
            src="https://static.wikia.nocookie.net/aesthetics/images/5/5f/Asadal_design_graphics.jpg"
            alt="Asadal Design"
            className="rounded shadow-lg mb-4 main-image"
            onError={(e) => { e.target.src = 'https://picsum.photos/600/300'; }}
          />
        </div>

        {/* ================= INTRODUCCION ================= */}
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis glass-card">
          <div className="col-lg-8 px-0">
            <h1 className="display-4 fst-italic" style={{ color: '#1a365d' }}>
              Visualizador de Estructuras de Datos
            </h1>
            <p className="lead my-3" style={{ color: '#2c3e50' }}>
              En esta plataforma podrás explorar algoritmos de búsqueda,
              ordenamiento, estructuras de datos y conceptos clave de EDA II,
              todo a través de una interfaz interactiva y un chatbot inteligente.
              Además, encontrarás secciones de documentación, ejemplos y
              explicaciones diseñadas para facilitar el aprendizaje de temas
              complejos de una manera más visual, dinámica y accesible.
            </p>
          </div>
        </div>

        {/* ================= ALGORITMOS ================= */}
        <div className="row g-4">
          {/* ================= INDICE ================= */}
          <section
            id="algoritmos"
            className="col-md-5"
          >
            <div
              className="position-sticky p-4 glass-card h-100"
              style={{ top: '2rem' }}
            >
              <h4 className="fst-italic text-center mb-4" style={{ color: '#1a365d' }}>
                Índice de Documentación
              </h4>

              <div className="row">
                {/* MENU LATERAL */}
                <div className="col-5 border-end pe-2">
                  <nav
                    id="navbar-example3"
                    className="h-100 flex-column align-items-stretch"
                  >
                    <nav className="nav nav-pills flex-column gap-1">
                      <a
                        className="nav-link active py-1 px-2"
                        href="#item-1"
                        style={{ fontSize: '0.9rem' }}
                      >
                        Algoritmos
                      </a>
                      <nav className="nav nav-pills flex-column ps-2">
                        <a
                          className="nav-link my-1 py-1 px-2"
                          href="#item-1-1"
                          style={{ fontSize: '0.85rem' }}
                        >
                          Búsqueda
                        </a>
                        <a
                          className="nav-link my-1 py-1 px-2"
                          href="#item-1-2"
                          style={{ fontSize: '0.85rem' }}
                        >
                          Ordenamiento
                        </a>
                      </nav>
                      <a
                        className="nav-link py-1 px-2"
                        href="#item-2"
                        style={{ fontSize: '0.9rem' }}
                      >
                        Estructuras
                      </a>
                      <a
                        className="nav-link py-1 px-2"
                        href="#item-3"
                        style={{ fontSize: '0.9rem' }}
                      >
                        Avanzado
                      </a>
                      <nav className="nav nav-pills flex-column ps-2">
                        <a
                          className="nav-link my-1 py-1 px-2"
                          href="#item-3-1"
                          style={{ fontSize: '0.85rem' }}
                        >
                          Árboles
                        </a>
                        <a
                          className="nav-link my-1 py-1 px-2"
                          href="#item-3-2"
                          style={{ fontSize: '0.85rem' }}
                        >
                          Grafos
                        </a>
                      </nav>
                    </nav>
                  </nav>
                </div>

                {/* CONTENIDO */}
                <div className="col-7 ps-3">
                  <div
                    data-bs-spy="scroll"
                    data-bs-target="#navbar-example3"
                    data-bs-smooth-scroll="true"
                    className="scrollspy-example-2"
                    tabIndex="0"
                    style={{
                      height: '320px',
                      overflowY: 'auto',
                      paddingRight: '5px'
                    }}
                  >
                    <div id="item-1" className="mb-4">
                      <h5 style={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        color: '#1a365d'
                      }}>
                        1. Algoritmos
                      </h5>
                      <p style={{ fontSize: '0.85rem', color: '#2c3e50' }}>
                        Definición y análisis de complejidad temporal y espacial.
                      </p>
                    </div>

                    <div id="item-1-1" className="mb-3">
                      <h6 style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#1a365d'
                      }}>
                        1.1 Búsqueda Binaria
                      </h6>
                      <p style={{ fontSize: '0.85rem', color: '#2c3e50' }}>
                        Divide y vencerás en arreglos ordenados.
                      </p>
                    </div>

                    <div id="item-1-2" className="mb-4">
                      <h6 style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#1a365d'
                      }}>
                        1.2 Quick & Heap Sort
                      </h6>
                      <p style={{ fontSize: '0.85rem', color: '#2c3e50' }}>
                        Métodos eficientes de ordenación mediante pivotes y montículos.
                      </p>
                    </div>

                    <div id="item-2" className="mb-4">
                      <h5 style={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        color: '#1a365d'
                      }}>
                        2. Estructuras
                      </h5>
                      <p style={{ fontSize: '0.85rem', color: '#2c3e50' }}>
                        Organización de datos en memoria lineal y no lineal.
                      </p>
                    </div>

                    <div id="item-3" className="mb-4">
                      <h5 style={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        color: '#1a365d'
                      }}>
                        3. Avanzado
                      </h5>
                      <p style={{ fontSize: '0.85rem', color: '#2c3e50' }}>
                        Conceptos complejos de la materia EDA II.
                      </p>
                    </div>

                    <div id="item-3-1" className="mb-3">
                      <h6 style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#1a365d'
                      }}>
                        3.1 Árboles AVL
                      </h6>
                      <p style={{ fontSize: '0.85rem', color: '#2c3e50' }}>
                        Árboles binarios que se balancean automáticamente.
                      </p>
                    </div>

                    <div id="item-3-2" className="mb-3">
                      <h6 style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#1a365d'
                      }}>
                        3.2 Grafos y Rutas
                      </h6>
                      <p style={{ fontSize: '0.85rem', color: '#2c3e50' }}>
                        Modelado de redes y optimización con Dijkstra y Kruskal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= CHATBOT ================= */}
          <section className="col-md-7">
            <div className="glass-card p-4 h-100">
              <h3 className="pb-4 mb-4 fst-italic border-bottom text-center" style={{ color: '#1a365d' }}>
                Conversación con el Bot
              </h3>

              <div
                className="p-3 mb-4 rounded-3 border chat-container"
              >
                {chatLog.map((chat, index) => (
                  <div
                    key={index}
                    className={`mb-2 p-3 rounded-4 shadow-sm ${
                      chat.rol === 'bot'
                        ? 'bg-info-subtle me-5'
                        : 'bg-white border ms-5'
                    }`}
                    style={{
                      borderBottomLeftRadius: chat.rol === 'bot' ? '0' : '1rem',
                      borderBottomRightRadius: chat.rol === 'usuario' ? '0' : '1rem',
                    }}
                  >
                    <strong>
                      {chat.rol === 'bot'
                        ? '🤖 Bot: '
                        : '👤 Tú: '}
                    </strong>
                    {chat.texto}
                  </div>
                ))}
              </div>

              <form
                onSubmit={manejarEnvio}
                className="d-flex gap-2"
              >
                <input
                  type="text"
                  className="form-control rounded-pill px-4 border shadow-sm"
                  placeholder="Pregunta sobre búsqueda binaria, grafos..."
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                />
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill px-4 shadow-sm"
                >
                  Enviar
                </button>
              </form>
            </div>
          </section>
        </div>

        {/* ================= DOCUMENTACION ================= */}
        <section
          id="documentacion"
          className="mt-5"
        >
          <div className="glass-card p-5 mb-5">
            <h2 className="text-center mb-4" style={{ color: '#1a365d' }}>
              Documentación
            </h2>
            <p className="text-center" style={{ color: '#2c3e50' }}>
              En esta plataforma se usan tecnologías como React para la interfaz,
              Bootstrap para el diseño y estilos, y un chatbot simulado para
              responder preguntas sobre algoritmos y estructuras de datos.
              Este chatbot funciona como un asistente educativo el cual puede
              recibir preguntas del usuario y responder con información relevante
              sobre temas de EDA II.
            </p>
          </div>
        </section>

        {/* ================= CONTACTO ================= */}
        <section
          id="contacto"
          className="mt-5"
        >
          <div className="glass-card p-5 mb-5">
            <h2 className="text-center mb-4" style={{ color: '#1a365d' }}>
              Contacto
            </h2>
            <p className="text-center" style={{ color: '#2c3e50' }}>
              Aquí podrás colocar los nombres de los integrantes,
              correos, redes sociales o información del proyecto.
            </p>
          </div>
        </section>
=======

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

>>>>>>> c24b6578f6279719dfdca77355659cbcdc83295c
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
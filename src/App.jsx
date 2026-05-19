import './App.css';
import React, { useState, useRef } from 'react'; // 1. Importamos useState para la "memoria"
import miniRodri from './assets/minirodri.png';
import musicaFondo from './assets/musica-fondo.mp3';

function App() {

  // --- Estados y Referencias para la Música ---
  const [musicaActiva, setMusicaActiva] = useState(false);
  const audioRef = useRef(null); // Nuestro "control remoto"

  const controlarMusica = () => {
    if (musicaActiva) {
      audioRef.current.pause(); // Pausa la canción
    } else {
      audioRef.current.play().catch(err => {
        console.log("El navegador bloqueó el autoplay hasta que interactúes.");
      }); // Sube el volumen
    }
    setMusicaActiva(!musicaActiva); // Cambia el estado del botón
  };

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

      {/* 🍏 AQUÍ AGREGAMOS LA ETIQUETA DE AUDIO*/}
      <audio ref={audioRef} src={musicaFondo} loop />

      {/* Encabezado Principal */}
      <header className="hero-window mb-4">
        {/* Barra tipo Windows Vista */}
        <div className="window-top-bar">
          <div className="window-buttons-left">
            <button className="vista-circle-btn">◀</button>
            <button className="vista-circle-btn">▶</button>
          </div>

          {/* 🍏 AQUÍ COLOCAMOS EL BOTÓN MULTIMEDIA ESTILO GLOSSY */}
          <button onClick={controlarMusica} className="btn-glossy-music px-3 py-1">
            {musicaActiva ? '🎵 Pausar Música' : '🔇 Activar Música'}
          </button>

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
          <a className="nav-item nav-link active vista-link" href="#">Inicio</a>
          <a className="nav-item nav-link vista-link" href="#">Algoritmos</a>
          <a className="nav-item nav-link vista-link" href="#">Documentación</a>
          <a className="nav-item nav-link vista-link" href="#">Nosotros</a>
          <a className="nav-item nav-link vista-link" href="#">¡A trabajar!</a>
        </nav>
      </div>

      {/* Tarjeta Principal de Presentación */}
      <div className="presentation-card mb-5">
        <div className="row align-items-center">
          <div className="col-md-7">
            <h1 className="presentation-title">
              Visualizador de <br />
              Estructuras de Datos
            </h1>
            <p className="presentation-text">
              Bienvenido a MiniRodri 🍏, el asistente visual del proyecto EDA II.
              Aprende algoritmos, árboles, grafos, ordenamientos y más de forma interactiva.
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

      {/* SECCIÓN PRINCIPAL: ÍNDICE Y CONTENIDO TOTALMENTE SIMÉTRICOS */}
      <div className="row g-4 mb-4">
        <h3 className="section-title mb-3">Índice Temático Interactivo</h3>
        
        {/* Columna Izquierda: Menú del Scrollspy limpio sin elementos extra */}
        <div className="col-md-4">
          <div 
            className="p-3 bg-light rounded shadow-sm border border-light-subtle d-flex flex-column justify-content-center"
            style={{ height: '450px' }}
          >
            <h4 className="sidebar-title text-center mb-4">Temas Disponibles</h4>
            
            <div id="simple-list-example" className="d-flex flex-column gap-3 simple-list-example-scrollspy text-center">
              <a className="p-2 rounded btn btn-outline-primary btn-sm text-start fw-medium" href="#simple-list-item-1">• Merge Sort</a>
              <a className="p-2 rounded btn btn-outline-primary btn-sm text-start fw-medium" href="#simple-list-item-2">• Quick Sort</a>
              <a className="p-2 rounded btn btn-outline-primary btn-sm text-start fw-medium" href="#simple-list-item-3">• Árboles Binarios</a>
              <a className="p-2 rounded btn btn-outline-primary btn-sm text-start fw-medium" href="#simple-list-item-4">• Estructuras de Grafos</a>
              <a className="p-2 rounded btn btn-outline-primary btn-sm text-start fw-medium" href="#simple-list-item-5">• Complejidad Algorítmica</a>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Contenido Desplazable (Scrollspy) */}
        <div className="col-md-8">
          <div 
            data-bs-spy="scroll" 
            data-bs-target="#simple-list-example" 
            data-bs-offset="0" 
            data-bs-smooth-scroll="true" 
            className="scrollspy-example bg-light p-4 rounded shadow-sm border border-light-subtle" 
            tabIndex="0"
            style={{ height: '450px', overflowY: 'auto', position: 'relative' }}
          >
            <h4 id="simple-list-item-1" className="text-primary mt-2">1. Merge Sort</h4>
            <p>Es un algoritmo de ordenamiento basado en la técnica de <em>Divide y Vencerás</em>. Divide el arreglo recursivamente a la mitad hasta tener subarreglos de tamaño 1, para luego fusionarlos (merge) de manera ordenada en tiempo lineal $O(n \log n)$.</p>
            <hr />

            <h4 id="simple-list-item-2" className="text-primary mt-4">2. Quick Sort</h4>
            <p>Otro algoritmo clásico de ordenamiento que utiliza un elemento llamado "pivote" para particionar la estructura. Coloca los menores a un lado y los mayores al otro, repitiendo el proceso de manera recursiva.</p>
            <hr />

            <h4 id="simple-list-item-3" className="text-primary mt-4">3. Árboles Binarios</h4>
            <p>Estructuras de datos no lineales y jerárquicas. Cada nodo padre puede tener como máximo dos hijos (izquierdo y derecho). Son fundamentales para búsquedas rápidas como en los árboles binarios de búsqueda (BST).</p>
            <hr />

            <h4 id="simple-list-item-4" className="text-primary mt-4">4. Estructuras de Grafos</h4>
            <p>Un conjunto de vértices (nodos) conectados a través de aristas (relaciones). Se pueden representar mediante matrices de adyacencia o listas de adyacencia, indispensables para redes y mapas.</p>
            <hr />

            <h4 id="simple-list-item-5" className="text-primary mt-4">5. Complejidad Algorítmica</h4>
            <p>Estudio del rendimiento de los algoritmos mediante la notación Big O ($O$). Nos permite evaluar la eficiencia temporal y espacial a medida que el tamaño de los datos de entrada ($n$) crece exponencialmente.</p>
          </div>
        </div>
      </div>

      {/* SECCIÓN INFERIOR COMPLETA: MANTENIENDO EL DISEÑO CON BOTONES DE COLORES */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-8">
          <div className="chat-preview-card p-4 text-center bg-light rounded shadow-sm border border-light-subtle">
            <img
              src={miniRodri}
              alt="MiniRodri"
              className="chat-preview-img mb-2"
              style={{ width: '65px', height: 'auto' }}
            />
            <h4 className="chat-preview-title fw-bold text-primary mb-2">¿Necesitas ayuda con EDA II?</h4>
            <p className="chat-preview-text text-muted mb-3">
              MiniRodri puede guiarte de forma interactiva con los siguientes temas:
            </p>
            
            {/* Los 4 botones de categorías interactivos */}
            <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
              <button className="btn btn-primary px-3 shadow-sm">Ver algoritmos</button>
              <button className="btn btn-info text-white px-3 shadow-sm">Árboles</button>
              <button className="btn btn-success px-3 shadow-sm">Grafos</button>
              <button className="btn btn-warning text-white px-3 shadow-sm">Clasificación</button>
            </div>

            {/* Botón de Acción Principal para desplegar el Chat */}
            <button
              className="btn btn-primary btn-lg open-chat-btn w-100 fw-bold shadow"
              style={{ maxWidth: '400px', margin: '0 auto' }}
              onClick={() => setChatAbierto(true)}
            >
              Abrir Asistente Inteligente
            </button>
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
          <span>¿Necesitas ayuda?</span>
        </button>
      )}

      {/* VENTANA DEL CHATBOT EMERGENTE */}
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
              <span className="fw-bold">MiniRodri Bot</span>
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

          {/* Contenido Interno de la Ventana */}
          <div className="chat-window-body">
            <div className="text-center mb-3">
              <img
                src={miniRodri}
                alt="MiniRodri"
                className="chat-main-image"
              />
              <h5 className="mt-2">Hola 👋 Soy MiniRodri</h5>
              <p className="small">¿Qué necesitas aprender hoy?</p>
            </div>

            {/* Botones interactivos rápidos */}
            <div className="d-grid gap-2 mb-3">
              <button className="btn btn-primary btn-sm">Ver algoritmos</button>
              <button className="btn btn-info btn-sm text-white">Pregunta sobre un algoritmo</button>
              <button className="btn btn-success btn-sm">Funcionamiento de estructuras</button>
              <button className="btn btn-warning btn-sm text-white">¿Quiénes somos?</button>
              <button className="btn btn-secondary btn-sm">Otra pregunta</button>
            </div>

            {/* Historial de la Conversación */}
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

            {/* Formulario de Entrada */}
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
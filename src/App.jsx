import './App.css';
import React, { useState, useRef } from 'react';
import miniRodri from './assets/minirodri.png';
import musicaFondo from './assets/musica-fondo.mp3';
import pecesGilet from './assets/peces-acuario.gif';

const BACKEND_URL = "https://proyecto-edaii-backend.onrender.com";
const CHATBOT_URL = "https://repo-chatbot-ia.onrender.com";

function App() {

  const [musicaActiva, setMusicaActiva] = useState(false);
  const audioRef = useRef(null);

  const controlarMusica = () => {
    if (musicaActiva) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.log("El navegador bloqueó el autoplay hasta que interactúes.");
      });
    }
    setMusicaActiva(!musicaActiva);
  };

  const [mensaje, setMensaje] = useState('');

  const [chatLog, setChatLog] = useState([
    { rol: 'bot', texto: '¡Hola! Soy MiniRodri 🍏 ¿En qué algoritmo puedo ayudarte hoy?' }
  ]);

  const [chatAbierto, setChatAbierto] = useState(false);
  const [chatExpandido, setChatExpandido] = useState(false);
  const [cargando, setCargando] = useState(false);

  // 4. Función para enviar mensajes
  const manejarEnvio = async (e) => {
    e.preventDefault();

    if (!mensaje.trim() || cargando) return;

    const preguntaUsuario = mensaje.trim();
    // Agregamos el mensaje del usuario al historial
    setChatLog((prevChat) => [
      ...prevChat,
      { rol: 'usuario', texto: preguntaUsuario }
    ]);

    setMensaje('');
    setCargando(true);

   try{
      const respuestaApi = await fetch('https://repo-chatbot-ia.onrender.com/preguntar', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json', 
        },
        body: JSON.stringify({ pregunta: preguntaUsuario }), 
      });

      if (!respuestaApi.ok){
        throw new Error('Error en la respuesta del servidor');
      }

      const datos = await respuestaApi.json();

      setChatLog((prevChat) => [
        ...prevChat,
        { rol: 'bot', texto: datos.respuesta } // 'respuesta' es la clave que retorna tu server.py
      ]);
   }catch (error) {
      console.error('ERROR al conectar la IA:', error);
      setChatLog((prevChat) => [
        ...prevChat,
        {rol: 'bot', texto: 'Lo siento, hubo un error al conectar con el servidor.' }
      ]);
   }finally {
    setCargando(false);
   }
  };

  const cerrarChat = () => {
    setChatAbierto(false);
    setChatLog([
      { rol: 'bot', texto: '¡Hola! Soy MiniRodri 🍏 ¿En qué algoritmo puedo ayudarte hoy?' }
    ]);
  };

  return (
    <div className="container py-4">

      <audio ref={audioRef} src={musicaFondo} loop />

      <header id="inicio" className="hero-window mb-4 section-offset" style={{ position: 'relative', overflow: 'hidden' }}>
        
        <div className="vista-fish-aquarium" style={{ backgroundImage: `url(${pecesGilet})` }}></div>

        <div className="window-top-bar" style={{ position: 'relative', zIndex: 10 }}>
          <div className="window-buttons-left">
            <button className="vista-circle-btn">◀</button>
            <button className="vista-circle-btn">▶</button>
          </div>

          <button onClick={controlarMusica} className="btn-glossy-music px-3 py-1">
            {musicaActiva ? '🎵 Pausar música' : '🔇 Activar música'}
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
        <div className="hero-content text-center" style={{ position: 'relative', zIndex: 5 }}>
          <img src={miniRodri} alt="MiniRodri" className="mini-rodri-main" />
          <h1 className="main-title">
            MiniRodri <br />
            <span className="sub-title"> Tú pequeño asistente interactivo en EDA II</span>
          </h1>
          <p className="main-subtitle">
            Visualizador interactivo de algoritmos,
            estructuras de datos y chatbot inteligente.
          </p>
        </div>
      </header>

      <div className="nav-scroller py-2 mb-4 vista-navbar">
        <nav className="nav justify-content-between px-3"> 
          <a className="nav-item nav-link active vista-link d-flex align-items-center gap-2" href="#inicio">
            <img src="https://img1.picmix.com/output/stamp/normal/2/8/1/9/2469182_9b42d.png" alt="Inicio" width="70" height="70" style={{ objectFit: 'contain' }} />
            Inicio
          </a>
          <a className="nav-item nav-link vista-link d-flex align-items-center gap-2" href="#algoritmos">
            <img src="https://www.pngall.com/wp-content/uploads/17/Frutiger-Aero-Distinctive-Type-Style-PNG.png" alt="Algoritmos" width="40" height="40" style={{ objectFit: 'contain' }} />
            Algoritmos
          </a>
          <a className="nav-item nav-link vista-link d-flex align-items-center gap-2" href="#documentacion">
            <img src="https://images.icon-icons.com/991/PNG/512/Windows7_icon-icons.com_75251.png" alt="Documentación" width="32" height="32" style={{ objectFit: 'contain' }} />
            Documentación
          </a>
          <a className="nav-item nav-link vista-link d-flex align-items-center gap-2" href="#nosotros">
            <img src="https://www.pngall.com/wp-content/uploads/17/Frutiger-Aero-Artistic-Font-Showcase-PNG.png" alt="Nosotros" width="70" height="70" style={{ objectFit: 'contain' }} />
            Nosotros
          </a>
          <a className="nav-item nav-link vista-link d-flex align-items-center gap-2" href="#trabajar">
            <img src="https://pbs.twimg.com/media/F0v3cN-aQAECTcf.png" alt="¡A trabajar!" width="32" height="32" style={{ objectFit: 'contain' }} />
            ¡A trabajar!
          </a>
        </nav>
      </div>

      <div className="presentation-card mb-5">
        <div className="row align-items-center">
          <div className="col-md-7">
            <h1 className="presentation-title">
              Visualizador de <br />
              Estructuras de Datos
            </h1>
            <p className="presentation-text texto-justificado">
              <div className="texto-centrado">
                <strong>Bienvenido a MiniRodri 🍏</strong>
              </div>
              <br />
            MiniRodri es un proyecto creado por estudiantes del grupo 6 de Estructuras de
            Datos y Algoritmos II, con el propósito de ayudar a comprender mejor los temas
            de la materia. En esta página se presentan explicaciones y ejemplos sobre algoritmos, árboles, grafos y otros conceptos
            importantes. Ya sea que busques repasar conceptos clave o resolver dudas específicas sobre algunos algoritmos, ¡MiniRodri está aquí para guiarte paso a paso!
            </p>
          </div>
          <div className="col-md-5 text-center">
            <img src={miniRodri} alt="MiniRodri" className="presentation-rodri" />
          </div>
        </div>
      </div>

      <div id="algoritmos" className="container py-4 interactive-frutiger-index section-offset">
        <div className="glass-bubble-bg"></div>
        <h3 className="section-title text-center text-primary-aero mb-4">Índice temático interactivo</h3>
        <div className="row g-4 align-items-stretch">
          
          {/* ⬅️ COLUMNA IZQUIERDA: MENÚ DE BOTONES */}
          <div className="col-md-4">
            <div className="frutiger-sidebar p-3 d-flex flex-column gap-2 justify-content-center h-100">
              <h4 className="sidebar-title text-center mb-3">Temas disponibles</h4>
              <div className="d-flex flex-column gap-3 frutiger-bubble-list">
                
                {/* 🌟 FUNCIÓN MANEJADORA DE SCROLL INTERNO ESTRICTO (PROHIBIDO MOVER LA PANTALLA) 🌟 */}
{(() => {
  const scrollAlTema = (e, idTema) => {
    e.preventDefault(); // Detiene cualquier intento de mover la URL o la página
    
    // 1. Buscamos la cajita contenedora de la derecha (la que tiene el scrollbar)
    const contenedorDerecho = document.querySelector('.frutiger-scrollspy');
    // 2. Buscamos el elemento/tema específico al que queremos ir
    const elementoDestino = document.getElementById(idTema);
    
    if (contenedorDerecho && elementoDestino) {
      // Calculamos la posición exacta del tema respecto al contenedor
      const posicionDestino = elementoDestino.offsetTop - contenedorDerecho.offsetTop;
      
      // Movemos el scroll INTRÍNSECO del contenedor sin tocar el resto de la pantalla
      contenedorDerecho.scrollTo({
        top: posicionDestino - 15, // El -15 es el margen de respeto arriba para que no se pegue al techo
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <a className="frutiger-bubble-item" href="#" onClick={(e) => scrollAlTema(e, 'tema-fusion')}>• Ordenación por fusión</a>
      <a className="frutiger-bubble-item" href="#" onClick={(e) => scrollAlTema(e, 'tema-rapida')}>• Clasificación rápida</a>
      <a className="frutiger-bubble-item" href="#" onClick={(e) => scrollAlTema(e, 'tema-arboles')}>• Árboles Binarios</a>
      <a className="frutiger-bubble-item" href="#" onClick={(e) => scrollAlTema(e, 'tema-grafos')}>• Estructuras de grafos</a>
      <a className="frutiger-bubble-item" href="#" onClick={(e) => scrollAlTema(e, 'tema-complejidad')}>• Complejidad algorítmica</a>
    </>
  );
})()}

              </div>
            </div>
          </div>

          {/* ➡️ COLUMNA DERECHA: CAJA CON SCROLL INTERNO */}
          <div className="col-md-8">
            <div className="frutiger-scrollspy bg-light p-4 rounded shadow-sm border border-light-subtle">
              <div className="scrollspy-glossy-overlay"></div>
              
              <div id="tema-fusion" className="scroll-section texto-justificado">
                <h4 className="text-primary mt-2">1. Ordenación por fusión</h4>
                <p>Es un algoritmo de ordenamiento basado en la técnica de <em>Divide y Vencerás</em>. Divide el arreglo recursivamente a la mitad hasta tener subarreglos de tamaño 1, para luego fusionarlos (merge) de manera ordenada en tiempo lineal $O(n \log n)$.</p>
              </div>
                            <hr />

              <div className="info-card">
                 <table className="table table-bordered table-striped">
                  <thead>
                    <tr><th>Archivo</th><th>Descripción</th><th>Uso Front-End</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>binary_tree.py</td><td>Árbol binario de búsqueda.</td><td>Visualización de recorridos y estructura.</td></tr>
                    <tr><td>btree.py</td><td>Árbol B de orden 3.</td><td>Representación por niveles.</td></tr>
                    <tr><td>bplustree.py</td><td>Árbol B+ con hojas enlazadas.</td><td>Visualización de hojas conectadas.</td></tr>
                    <tr><td>notation.py</td><td>Conversión de notaciones.</td><td>Conversor de expresiones.</td></tr>
                    <tr><td>router.py</td><td>Endpoints del módulo.</td><td>Comunicación Backend-Frontend.</td></tr>
                  </tbody>
                </table>      </div>        
              {/* ORDENAMIENTO */}
              <div id="item-ordenamiento" className="scroll-section mb-4">
                               <div className="info-card"> <h4>1.2 Carpeta Ordenamiento</h4>

                <table className="table table-bordered table-striped">
                  <thead>
                    <tr><th>Archivo</th><th>Descripción</th><th>Uso Front-End</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>sorting_algorithms.py</td><td>Bubble, Heap y Quick Sort.</td><td>Animaciones.</td></tr>
                    <tr><td>sorting_schemas.py</td><td>Modelos de entrada y salida.</td><td>Estructuración de datos.</td></tr>
                    <tr><td>sorting_router.py</td><td>Endpoints de ordenamiento.</td><td>Ejecución desde la interfaz.</td></tr>
                    <tr><td>counting_sort.py</td><td>Ordenamiento por conteo.</td><td>Tabla de frecuencias.</td></tr>
                    <tr><td>merge_sort.py</td><td>Divide y combina arreglos.</td><td>Visualización de subarreglos.</td></tr>
                    <tr><td>radix_sort.py</td><td>Ordenamiento por dígitos.</td><td>Etapas por posición.</td></tr>
                  </tbody>
                </table>
              </div>
 </div>
              <hr />
               <div className="info-card"> <h4>1.1Módulo de Algoritmos</h4>
  
               <div id="tema-fusion" className="scroll-section texto-justificado">

  <p>
    La carpeta algoritmos contiene las implementaciones principales de estructuras de datos, 
    algoritmos de búsqueda, ordenamiento, grafos, manejo de archivos y procesamiento paralelo.
  </p>
  
  <p>
    Su función dentro del sistema es concentrar la lógica computacional que posteriormente puede 
    ser utilizada por la API y representada visualmente en el front-end.
  </p>
  
  <p>
    Este módulo no está diseñado para mostrarse directamente al usuario final, sino para proporcionar 
    las operaciones que serán consumidas desde la interfaz. Por ello, la documentación se enfoca en 
    describir brevemente qué hace cada archivo y cómo podría representarse en la parte visual del sistema.
  </p>
</div>
              </div>


              <hr className="frutiger-divider" />
              
              <div id="tema-rapida" className="scroll-section texto-justificado">
                <h4 className="text-primary mt-4">2. Clasificación rápida</h4>
                <p>Otro algoritmo clásico de ordenamiento que utiliza un elemento llamado "pivote" para particionar la estructura. Coloca los menores a un lado y los mayores al otro, repitiendo el proceso de manera recursiva.</p>
              </div>
                            <hr />

               {/* ARCHIVOS */}
              <div id="item-archivos" className="scroll-section mb-4">
                <h4 className="text-primary">2.1 Carpeta Archivos</h4>
                <p>Gestiona almacenamiento y consulta de información básica de archivos.</p>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr><th>Archivo</th><th>Descripción</th><th>Uso Front-End</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>organizacion.py</td><td>Administra carpetas de almacenamiento.</td><td>Ubicación de archivos cargados.</td></tr>
                    <tr><td>operaciones.py</td><td>Guarda archivos y obtiene metadatos.</td><td>Tabla de información del archivo.</td></tr>
                    <tr><td>__init__.py</td><td>Exporta funciones del módulo.</td><td>Integración interna.</td></tr>
                  </tbody>
                </table>
                              </div>
                                            <div id="item-archivos" className="scroll-section mb-4">

                               <h4 className="text-primary">2.2 Carpeta Búsqueda</h4>
                <p>Implementa algoritmos para localizar elementos dentro de arreglos.</p>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr><th>Archivo</th><th>Descripción</th><th>Uso Front-End</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>busqueda_lineal.py</td><td>Recorre elementos secuencialmente.</td><td>Búsqueda paso a paso.</td></tr>
                    <tr><td>busqueda_binaria.py</td><td>Divide el arreglo en mitades.</td><td>Visualización por rangos.</td></tr>
                    <tr><td>hash.py</td><td>Tabla hash para búsqueda eficiente.</td><td>Tabla clave-valor.</td></tr>
                  </tbody>
                </table>
              </div>



              <hr className="frutiger-divider" />
              
              <div id="tema-arboles" className="scroll-section texto-justificado">
                <h4 className="text-primary mt-4">3. Árboles Binarios</h4>
                <p>Estructuras de datos no lineales y jerárquicas. Cada nodo padre puede tener como máximo dos hijos (izquierdo y derecho). Son fundamentales para búsquedas rápidas como en los árboles binarios de búsqueda (BST).</p>
              </div>
               <hr />

<div className="info-card"> <h4>3.1 Carpeta arboles</h4>
              <div id="tema-fusion" className="scroll-section texto-justificado">
 <p>
    La carpeta arboles contiene algoritmos relacionados con estructuras jerárquicas y conver
sión de expresiones matemáticas. Incluye árboles binarios, árboles B, árboles B+ y conversión
entre notaciones infija, prefija y sufija.
  </p>
                          </div>

              </div>
              <hr className="frutiger-divider" />
              
              <div id="tema-grafos" className="scroll-section texto-justificado">
                <h4 className="text-primary mt-4">4. Estructuras de grafos</h4>
                <p>Un conjunto de vértices (nodos) conectados a través de aristas (relaciones). Se pueden representar mediante matrices de adyacencia o listas de adyacencia, indispensables para redes y mapas.</p>
              </div>
                            <hr />

               <div id="item-grafos" className="scroll-section mb-4">
                <h4 className="text-primary">4.1 Carpeta Grafos</h4>
                <p>Representación y recorrido de grafos mediante BFS y DFS.</p>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr><th>Archivo</th><th>Descripción</th><th>Uso Front-End</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>representacion.py</td><td>Matriz y lista de adyacencia.</td><td>Diagramas y tablas.</td></tr>
                    <tr><td>bfs.py</td><td>Búsqueda en anchura.</td><td>Recorrido por niveles.</td></tr>
                    <tr><td>dfs.py</td><td>Búsqueda en profundidad.</td><td>Exploración recursiva.</td></tr>
                  </tbody>
                </table>
              </div>


              <hr className="frutiger-divider" />
              
              <div id="tema-complejidad" className="scroll-section texto-justificado">
                <h4 className="text-primary mt-4">5. Complejidad algorítmica</h4>
                <p>Estudio del rendimiento de los algoritmos mediante la notación Big O ($O$). Nos permite evaluar la eficiencia temporal y espacial a medida que el tamaño de los datos de entrada ($n$) crece exponencialmente.</p>
              </div>
              
            </div>
          </div>

        </div>
      </div>

     <div id="documentacion" className="documentation-section section-offset mb-5">
  <h3 className="section-title text-center mb-4">Documentación</h3>
  <div className="row g-4">

    {/* COLUMNA: CÓDIGOS */}
    <div className="col-md-6">
      <div className="info-card">
        <h4>Códigos</h4>
        <p>En esta sección podremos agregar ejemplos de código sobre algoritmos</p>
        
        <a 
          href="/docs/EDA2_Vol1_Codigo.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="frutiger-document-btn mt-3"
        >
          <img 
            src="https://images.icon-icons.com/991/PNG/512/Windows7_icon-icons.com_75251.png" 
            alt="Icono Códigos" 
            className="document-btn-icon"
          />
          <span className="document-btn-text">Ver volumen 1 (códigos)</span>
        </a>
      </div>
    </div>

    {/* COLUMNA: EXPLICACIONES */}
    <div className="col-md-6">
      <div className="info-card">
        <h4>Explicaciones</h4>
        <p>Aquí podremos colocar documentación y marcos teóricos conceptuales</p>
        
        <a 
          href="/docs/EDA2_Vol2_Marco_Teorico_1.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="frutiger-document-btn mt-3"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Windows_7_Folder_Icon.png" 
            alt="Icono Documento Teoría" 
            className="document-btn-icon"
          />
          <span className="document-btn-text">Ver Volumen 2 (Teoría)</span>
        </a>
      </div>
    </div>
</div></div>
      <div id="nosotros" className="team-section section-offset mb-5">
        <h3 className="section-title text-center mb-4">Nosotros</h3>
        <div className="info-card text-center">
          <img src={miniRodri} alt="MiniRodri" className="chat-preview-img mb-3" style={{ width: '90px', height: 'auto' }} />
          <h4>Equipo creador de MiniRodri</h4>
          <p>En esta sección podremos agregar los nombres de los integrantes del equipo</p>
          <div className="team-placeholder">
            <p><strong>Integrante 1:</strong> Nombre</p>
            <p><strong>Integrante 2:</strong> Nombre</p>
            <p><strong>Integrante 3:</strong> Nombre</p>
          </div>
        </div>
      </div>

      <div id="trabajar" className="row justify-content-center mb-5 section-offset">
        <div className="col-md-8">
          <div className="chat-preview-card p-4 text-center bg-light rounded shadow-sm border border-light-subtle">
            <img src={miniRodri} alt="MiniRodri" className="chat-preview-img mb-2" style={{ width: '65px', height: 'auto' }} />
            <h4 className="chat-preview-title fw-bold text-primary mb-2">¿Necesitas ayuda con EDA II?</h4>
            <p className="chat-preview-text text-muted mb-3 texto-centrado">
              MiniRodri puede guiarte de forma interactiva con los siguientes temas:
            </p>
            
            <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
              {/* 🌟 Añadida la clase 'etiqueta-estatica' para congelarlos al 100% */}
              <span className="btn btn-primary px-3 shadow-sm etiqueta-estatica">Algoritmos</span>
              <span className="btn btn-info text-white px-3 shadow-sm etiqueta-estatica">Árboles</span>
              <span className="btn btn-success px-3 shadow-sm etiqueta-estatica">Grafos</span>
              <span className="btn btn-warning text-white px-3 shadow-sm etiqueta-estatica">Clasificación</span>
            </div>
            
            {/* 🚀 BOTÓN REAL INTERACTIVO: Conserva la etiqueta <button> para que sí salga la manita al pasar el cursor */}
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
      

      {!chatAbierto && (
        <button className="floating-chat-button" onClick={() => setChatAbierto(true)}>
          <img src={miniRodri} alt="MiniRodri" className="floating-chat-image" />
          <span>¿Necesitas ayuda?</span>
        </button>
      )}

      {chatAbierto && (
        <div className={`chat-window ${chatExpandido ? 'expanded-chat' : ''}`}>
          <div className="chat-window-header">
            <div className="d-flex align-items-center gap-2">
              <img src={miniRodri} alt="MiniRodri" className="chat-header-image" />
              <span className="fw-bold">MiniRodri Bot</span>
            </div>
            <div className="d-flex gap-2">
              <button className="window-action-btn" onClick={() => setChatAbierto(false)}>—</button>
              <button className="window-action-btn" onClick={() => setChatExpandido(!chatExpandido)}>□</button>
              <button className="window-action-btn close-btn" onClick={cerrarChat}>✕</button>
            </div>
          </div>

          <div className="chat-window-body">
            <div className="text-center mb-3">
              <img src={miniRodri} alt="MiniRodri" className="chat-main-image" />
              <h5 className="mt-2">Hola 👋 Soy MiniRodri</h5>
              <p className="small">¿Qué necesitas aprender hoy?</p>
            </div>

            <div className="chat-history">
              {chatLog.map((chat, index) => (
                <div
                  key={index}
                  className={`chat-message ${chat.rol === 'bot' ? 'bot-message' : 'user-message'}`}
                >
                  <strong>{chat.rol === 'bot' ? 'MiniRodri: ' : 'Tú: '}</strong>
                  {chat.texto}
                </div>
              ))}
            </div>

            <form onSubmit={manejarEnvio} className="d-flex gap-2 mt-3">
              <input
                type="text"
                className="form-control"
                placeholder={cargando ? "MiniRodri está pensando..." : "Escribe tu pregunta..."}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                disabled={cargando} // <-- Bloquea la entrada para que no escriban mientras piensa
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={cargando} // <-- Bloquea el botón para evitar múltiples clics seguidos
              >
                {cargando ? '...' : 'Enviar'}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;


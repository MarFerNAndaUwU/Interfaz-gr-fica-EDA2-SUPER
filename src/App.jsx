import './App.css';
import React, { useState } from 'react';

function App() {

  const [mensaje, setMensaje] = useState('');

  const [chatLog, setChatLog] = useState([
    {
      rol: 'bot',
      texto: '¡Hola! ¿En qué algoritmo puedo ayudarte hoy?'
    }
  ]);

  const manejarEnvio = (e) => {

    e.preventDefault();

    if (!mensaje.trim()) return;

    setChatLog([
      ...chatLog,
      {
        rol: 'usuario',
        texto: mensaje
      }
    ]);

    setMensaje('');
  };

  return (

    <div>

      {/* ================= MENU ================= */}

      <input
        className="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />

      <label htmlFor="menu-icon"></label>

      <nav className="menu-nav">

        <ul className="pt-5">

          <li><a href="#inicio">Inicio</a></li>

          <li><a href="#algoritmos">Algoritmos</a></li>

          <li><a href="#documentacion">Documentación</a></li>

          <li><a href="#contacto">Contacto</a></li>

        </ul>

      </nav>

      {/* ================= CONTENIDO ================= */}

      <div
        id="inicio"
        className="container py-4"
      >

        {/* ================= ENCABEZADO ================= */}

        <header className="border-bottom lh-1 py-3 mb-4">

          <div className="row flex-nowrap justify-content-between align-items-center">

            <div className="col-4 text-center mx-auto">

              <h1 className="blog-header-logo text-body-emphasis text-decoration-none fw-bold">
                Chatbot EDA II
              </h1>

            </div>

          </div>

        </header>

        {/* ================= IMAGEN ================= */}

        <div className="text-center">

          <img
            src="https://static.wikia.nocookie.net/aesthetics/images/5/5f/Asadal_design_graphics.jpg"
            alt="Asadal Design"
            className="rounded shadow-lg mb-4 main-image"
          />

        </div>

        {/* ================= INTRODUCCION ================= */}

        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis glass-card">

          <div className="col-lg-8 px-0">

            <h1 className="display-4 fst-italic">
              Visualizador de Estructuras de Datos
            </h1>

            <p className="lead my-3">

              En esta plataforma podrás explorar algoritmos de búsqueda,
              ordenamiento, estructuras de datos y conceptos clave de EDA II,
              todo a través de una interfaz interactiva y un chatbot inteligente.
             Nuestro objetivo es transformar el aprendizaje de Estructuras de Datos y Algoritmos en una experiencia dinámica, donde la teoría se encuentra con la práctica en tiempo real. Ya sea que busques repasar conceptos fundamentales o resolver dudas específicas sobre complejidad de algunos algoritmos, nuestro asistente virtual está aquí para guiarte paso a paso.

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

              <h4 className="fst-italic text-center mb-4">
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
                        fontWeight: 'bold'
                      }}>
                        1. Algoritmos
                      </h5>

                      <p style={{ fontSize: '0.85rem' }}>
                        Definición y análisis de complejidad temporal y espacial.
                      </p>

                    </div>

                    <div id="item-1-1" className="mb-3">

                      <h6 style={{
                        fontSize: '0.9rem',
                        fontWeight: '600'
                      }}>
                        1.1 Búsqueda Binaria
                      </h6>

                      <p style={{ fontSize: '0.85rem' }}>
                        Divide y vencerás en arreglos ordenados.
                      </p>

                    </div>

                    <div id="item-1-2" className="mb-4">

                      <h6 style={{
                        fontSize: '0.9rem',
                        fontWeight: '600'
                      }}>
                        1.2 Quick & Heap Sort
                      </h6>

                      <p style={{ fontSize: '0.85rem' }}>
                        Métodos eficientes de ordenación mediante pivotes y montículos.
                      </p>

                    </div>

                    <div id="item-2" className="mb-4">

                      <h5 style={{
                        fontSize: '1rem',
                        fontWeight: 'bold'
                      }}>
                        2. Estructuras
                      </h5>

                      <p style={{ fontSize: '0.85rem' }}>
                        Organización de datos en memoria lineal y no lineal.
                      </p>

                    </div>

                    <div id="item-3" className="mb-4">

                      <h5 style={{
                        fontSize: '1rem',
                        fontWeight: 'bold'
                      }}>
                        3. Avanzado
                      </h5>

                      <p style={{ fontSize: '0.85rem' }}>
                        Conceptos complejos de la materia EDA II.
                      </p>

                    </div>

                    <div id="item-3-1" className="mb-3">

                      <h6 style={{
                        fontSize: '0.9rem',
                        fontWeight: '600'
                      }}>
                        3.1 Árboles AVL
                      </h6>

                      <p style={{ fontSize: '0.85rem' }}>
                        Árboles binarios que se balancean automáticamente.
                      </p>

                    </div>

                    <div id="item-3-2" className="mb-3">

                      <h6 style={{
                        fontSize: '0.9rem',
                        fontWeight: '600'
                      }}>
                        3.2 Grafos y Rutas
                      </h6>

                      <p style={{ fontSize: '0.85rem' }}>
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

            <h3 className="pb-4 mb-4 fst-italic border-bottom text-center">
              Conversación con el Bot
            </h3>

            <div
              className="p-3 mb-4 bg-light rounded-3 border"
              style={{
                height: '320px',
                overflowY: 'scroll'
              }}
            >

              {chatLog.map((chat, index) => (

                <div
                  key={index}
                  className={`mb-2 p-2 rounded ${
                    chat.rol === 'bot'
                      ? 'bg-info-subtle'
                      : 'bg-white border'
                  }`}
                >

                  <strong>
                    {chat.rol === 'bot'
                      ? 'Bot: '
                      : 'Tú: '}
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
                className="form-control"
                placeholder="Pregunta sobre búsqueda binaria, grafos..."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              />

              <button
                type="submit"
                className="btn btn-primary px-4"
              >
                Enviar
              </button>

            </form>

          </section>

        </div>

        {/* ================= DOCUMENTACION ================= */}

        <section
          id="documentacion"
          className="mt-5"
        >

          <div className="glass-card p-5 mb-5">

            <h2 className="text-center mb-4">
              Documentación
            </h2>

            <p className="text-center">

              En esta plataforma se usan tecnologías como React para la interfaz,
              Bootstrap para el diseño y estilos, y un chatbot simulado para
              responder preguntas sobre algoritmos y estructuras de datos.
              

            </p>

          </div>

        </section>

        {/* ================= CONTACTO ================= */}

        <section
          id="contacto"
          className="mt-5"
        >

          <div className="glass-card p-5 mb-5">

            <h2 className="text-center mb-4">
              Contacto
            </h2>

            <p className="text-center">
              Aquí podrás colocar los nombres de los integrantes,
              correos, redes sociales o información del proyecto.
            </p>

          </div>

        </section>

      </div>

    </div>
  );
}

export default App;
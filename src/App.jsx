// src/App.jsx
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [pageHistory, setPageHistory] = useState(['home']);

  // Efecto para marcar la app como cargada (SIN MÚSICA)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Función de navegación con historial
  const navigateTo = (page, data = null) => {
    // Actualizar historial
    setPageHistory(prev => [...prev, page]);
    
    // Cambiar página
    setCurrentPage(page);
    
    // Guardar datos del proyecto si es necesario
    if (data) {
      setSelectedProject(data);
    }

    // Scroll al top en cambio de página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Función para volver atrás
  const goBack = () => {
    if (pageHistory.length > 1) {
      const newHistory = [...pageHistory];
      newHistory.pop(); // Remover página actual
      const previousPage = newHistory[newHistory.length - 1];
      
      setPageHistory(newHistory);
      setCurrentPage(previousPage);
      
      // Limpiar proyecto seleccionado si volvemos al home
      if (previousPage === 'home') {
        setSelectedProject(null);
      }
    }
  };

  // Función para manejar eventos del teclado
  useEffect(() => {
    const handleKeyPress = (event) => {
      // ESC para volver atrás
      if (event.key === 'Escape' && pageHistory.length > 1) {
        goBack();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [pageHistory]);

  // Función para renderizar la página actual
  const renderPage = () => {
    const pageProps = {
      onNavigate: navigateTo,
      onGoBack: goBack,
      canGoBack: pageHistory.length > 1
    };

    switch (currentPage) {
      case 'home':
        return <Home {...pageProps} />;
      
      case 'project-details':
        return (
          <ProjectDetails 
            {...pageProps}
            project={selectedProject}
          />
        );
      
      case 'contact':
        return <Contact {...pageProps} />;
      
      default:
        // Fallback en caso de página no encontrada
        return <Home {...pageProps} />;
    }
  };

  // Loading state inicial
  if (!isAppLoaded) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-icon">
            <img 
              src="" 
              alt="Loading Castle"
              style={{
                width: '80px',
                height: '80px',
                objectFit: 'contain'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div style={{display: 'none', fontSize: '4rem'}}>🏰</div>
          </div>
          <div className="loading-spinner">
            <div className="animate-spin border-4 border-yellow-400 border-t-transparent rounded-full" 
                 style={{width: '3rem', height: '3rem'}}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Indicador de página actual para debugging (solo en desarrollo) */}
    

      {/* Contenedor principal con transición */}
      <div className={`page-container ${isAppLoaded ? 'page-loaded' : 'page-loading'}`}>
        {renderPage()}
      </div>

      {/* Estilos inline para transiciones de página */}
      <style jsx>{`
        .page-container {
          min-height: 100vh;
          transition: opacity 0.3s ease-in-out;
        }
        
        .page-loading {
          opacity: 0;
        }
        
        .page-loaded {
          opacity: 1;
        }

        .loading-spinner {
          margin-top: 1rem;
          display: flex;
          justify-content: center;
        }

        /* Animación de entrada para páginas */
        .App {
          animation: appFadeIn 0.5s ease-out;
        }

        @keyframes appFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Mejoras de accesibilidad */
        .App:focus {
          outline: none;
        }

        /* Optimización para dispositivos móviles */
        @media (max-width: 768px) {
          .App {
            overflow-x: hidden;
          }
        }

        /* Modo oscuro (preparado para futuras implementaciones) */
        @media (prefers-color-scheme: dark) {
          .App {
            filter: brightness(0.9);
          }
        }

        /* Reducir animaciones para usuarios que lo prefieran */
        @media (prefers-reduced-motion: reduce) {
          .page-container,
          .App {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
// src/components/LoadingScreen.jsx - Pantalla de carga épica
import React from 'react';

const LoadingScreen = ({ loadingProgress }) => {
  // Función para obtener el mensaje de estado
  const getLoadingMessage = (progress) => {
    if (progress < 20) return "🏗️ Construyendo defensas...";
    if (progress < 40) return "⚔️ Entrenando tropas...";
    if (progress < 60) return "🔮 Preparando hechizos...";
    if (progress < 80) return "🏰 Levantando muros...";
    if (progress < 100) return "✨ Finalizando aldea...";
    return "⚔️ ¡Listo para la batalla!";
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundImage: 'url("https://pbs.twimg.com/media/EmEvEadWoAIh3ZS.jpg:large")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#0D47A1', // Color de respaldo mientras carga la imagen
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      zIndex: 50,
      paddingBottom: '10vh'
    }}>
      {/* Overlay oscuro opcional para mejor contraste */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.3)',
        zIndex: 1
      }}></div>

      {/* Barra de progreso estilo Clash */}
      <div style={{
        width: '400px',
        maxWidth: '90vw',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #37474F, #546E7A)',
          borderRadius: '25px',
          height: '30px',
          border: '3px solidrgb(0, 0, 0)',
          overflow: 'hidden',
          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.5)'
        }}>
          <div style={{
            height: '100%',
            background: 'linear-gradient(135deg, #9C27B0 0%, #7B1FA2 50%, #4A148C 100%)',
            borderRadius: '22px',
            transition: 'width 0.3s ease',
            width: `${loadingProgress}%`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingRight: '12px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Efecto de brillo en la barra */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
              animation: 'clashButtonShine 2s ease-in-out infinite'
            }}></div>
            
            <span style={{
              color: 'white',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
              zIndex: 2
            }}>
              {Math.floor(loadingProgress)}%
            </span>
          </div>
        </div>
      </div>

      {/* Animaciones CSS */}
      <style>{`
        @keyframes clashButtonShine {
          0%, 100% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          50% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
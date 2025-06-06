// src/components/VillageDescription.jsx - Descripción del desarrollador
import React from 'react';

const VillageDescription = ({ playerData }) => {
  return (
    <div style={{
      position: 'absolute',
      top: '140px',
      left: '50%',
      transform: 'translateX(-50%)',
      maxWidth: '500px',
      margin: '0 20px',
      zIndex: 30
    }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '20px',
        border: '3px solid #2196F3',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Efecto de brillo */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'linear-gradient(45deg, transparent, rgba(33, 150, 243, 0.1), transparent)',
          animation: 'clashButtonShine 4s ease-in-out infinite'
        }}></div>
        
        <p style={{
          color: '#1A237E',
          fontWeight: '600',
          marginBottom: '12px',
          lineHeight: 1.6,
          fontSize: '1.1rem',
          textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)'
        }}>
          {playerData.description}
        </p>
        
        <p style={{
          color: '#424242',
          fontSize: '0.95rem',
          marginBottom: '15px',
          fontStyle: 'italic'
        }}>
          🖱️ ¡Haz clic en los edificios para explorar mi reino digital!
        </p>
        
        {/* Indicadores animados */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '15px'
        }}>
          {[0, 1, 2].map(i => (
            <div
              key={i}
              style={{
                width: '10px',
                height: '10px',
                background: '#2196F3',
                borderRadius: '50%',
                animation: 'bounce 1.5s ease-in-out infinite',
                animationDelay: `${i * 0.2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Animaciones CSS */}
      <style jsx>{`
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

export default VillageDescription;
// src/components/VillageBackground.jsx - Fondo de la aldea medieval
import React from 'react';

const VillageBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: -1
    }}>
      {/* Imagen de fondo principal */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url("https://i.pinimg.com/736x/ef/6e/45/ef6e4563933d0b929628f2a5b74829d0.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 1
      }}></div>

      {/* Overlay sutil para mejor contraste */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.15)',
        zIndex: 2
      }}></div>

      {/* Elementos decorativos del paisaje */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 3
      }}>
        {/* Árboles decorativos */}
        {[
          { x: '8%', y: '25%', size: 'small', emoji: '🌲' },
          { x: '92%', y: '30%', size: 'medium', emoji: '🌳' },
          { x: '5%', y: '80%', size: 'large', emoji: '🌲' },
          { x: '95%', y: '85%', size: 'small', emoji: '🌳' },
          { x: '15%', y: '15%', size: 'medium', emoji: '🌲' },
          { x: '85%', y: '20%', size: 'small', emoji: '🌿' }
        ].map((tree, index) => (
          <div
            key={`tree-${index}`}
            style={{
              position: 'absolute',
              left: tree.x,
              top: tree.y,
              transform: 'translate(-50%, -50%)',
              fontSize: tree.size === 'large' ? '2.8rem' : tree.size === 'medium' ? '2.2rem' : '1.8rem',
              animation: `treeFloat 5s ease-in-out infinite ${index * 0.7}s`,
              filter: 'drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.4))',
              opacity: 0.8
            }}
          >
            {tree.emoji}
          </div>
        ))}

        {/* Rocas y elementos naturales */}
        {[
          { x: '12%', y: '75%', emoji: '🪨', size: 'medium' },
          { x: '88%', y: '15%', emoji: '⛰️', size: 'large' },
          { x: '20%', y: '90%', emoji: '🪨', size: 'small' },
          { x: '80%', y: '95%', emoji: '🗿', size: 'medium' },
          { x: '25%', y: '20%', emoji: '🏔️', size: 'small' },
          { x: '75%', y: '10%', emoji: '🪨', size: 'small' }
        ].map((rock, index) => (
          <div
            key={`rock-${index}`}
            style={{
              position: 'absolute',
              left: rock.x,
              top: rock.y,
              transform: 'translate(-50%, -50%)',
              fontSize: rock.size === 'large' ? '2.5rem' : rock.size === 'medium' ? '2rem' : '1.5rem',
              animation: `rockBob 8s ease-in-out infinite ${index * 1.5}s`,
              filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))',
              opacity: 0.7
            }}
          >
            {rock.emoji}
          </div>
        ))}

       

        {/* Flores y hierba decorativa */}
        {[
          { x: '30%', y: '35%', emoji: '🌸', delay: '0s' },
          { x: '70%', y: '60%', emoji: '🌼', delay: '1s' },
          { x: '40%', y: '80%', emoji: '🌺', delay: '2s' },
          { x: '60%', y: '25%', emoji: '🌻', delay: '1.5s' },
          { x: '25%', y: '60%', emoji: '🌿', delay: '0.5s' },
          { x: '75%', y: '40%', emoji: '🍀', delay: '2.5s' }
        ].map((flower, index) => (
          <div
            key={`flower-${index}`}
            style={{
              position: 'absolute',
              left: flower.x,
              top: flower.y,
              transform: 'translate(-50%, -50%)',
              fontSize: '1.2rem',
              animation: `flowerSway 6s ease-in-out infinite ${flower.delay}`,
              filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3))',
              opacity: 0.6
            }}
          >
            {flower.emoji}
          </div>
        ))}

        {/* Nubes decorativas */}
        {[
          { x: '20%', y: '10%', size: 'large', delay: '0s' },
          { x: '60%', y: '8%', size: 'medium', delay: '3s' },
          { x: '85%', y: '12%', size: 'small', delay: '6s' }
        ].map((cloud, index) => (
          <div
            key={`cloud-${index}`}
            style={{
              position: 'absolute',
              left: cloud.x,
              top: cloud.y,
              transform: 'translate(-50%, -50%)',
              fontSize: cloud.size === 'large' ? '3rem' : cloud.size === 'medium' ? '2.5rem' : '2rem',
              animation: `cloudFloat 15s ease-in-out infinite ${cloud.delay}`,
              filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))',
              opacity: 0.4
            }}
          >
            ☁️
          </div>
        ))}
      </div>

      {/* Animaciones CSS */}
      <style>{`
        @keyframes treeFloat {
          0%, 100% { 
            transform: translate(-50%, -50%) translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translate(-50%, -50%) translateY(-10px) rotate(2deg); 
          }
        }

        @keyframes rockBob {
          0%, 100% { 
            transform: translate(-50%, -50%) translateY(0px); 
          }
          50% { 
            transform: translate(-50%, -50%) translateY(-6px); 
          }
        }

        @keyframes flowerSway {
          0%, 100% { 
            transform: translate(-50%, -50%) rotate(-3deg) scale(1); 
          }
          25% { 
            transform: translate(-50%, -50%) rotate(3deg) scale(1.05); 
          }
          50% { 
            transform: translate(-50%, -50%) rotate(-2deg) scale(1); 
          }
          75% { 
            transform: translate(-50%, -50%) rotate(2deg) scale(1.05); 
          }
        }

        @keyframes cloudFloat {
          0% { 
            transform: translate(-50%, -50%) translateX(-20px); 
          }
          50% { 
            transform: translate(-50%, -50%) translateX(20px); 
          }
          100% { 
            transform: translate(-50%, -50%) translateX(-20px); 
          }
        }
      `}</style>
    </div>
  );
};

export default VillageBackground;
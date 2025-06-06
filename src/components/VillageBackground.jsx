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
            
          </div>
        ))}
      </div>

    </div>
  );
};

export default VillageBackground;
// src/components/VillageFooter.jsx - Footer medieval estilo Clash
import React from 'react';
import { Swords, Shield, Crown } from 'lucide-react';

const VillageFooter = () => {
  return (
    <div style={{
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      textAlign: 'center',
      zIndex: 30
    }}>
      <div style={{
        background: 'linear-gradient(145deg, rgba(139, 69, 19, 0.95), rgba(101, 67, 33, 0.9))',
        color: '#F5DEB3',
        padding: '15px 30px',
        borderRadius: '25px',
        backdropFilter: 'blur(15px)',
        border: '4px solid #FFD700',
        boxShadow: 
          '0 8px 25px rgba(0, 0, 0, 0.6), ' +
          'inset 0 3px 0 rgba(255, 255, 255, 0.2), ' +
          'inset 0 -3px 0 rgba(0, 0, 0, 0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Textura de madera */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            repeating-linear-gradient(90deg, 
              rgba(160, 82, 45, 0.1) 0px, 
              rgba(160, 82, 45, 0.1) 2px, 
              transparent 2px, 
              transparent 8px
            )
          `,
          borderRadius: '21px',
          opacity: 0.7
        }}></div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '15px',
          fontSize: '1rem',
          fontWeight: '600',
          fontFamily: 'Georgia, serif',
          position: 'relative',
          zIndex: 2
        }}>
          <Swords size={20} color="#FFD700" />
          <span style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            letterSpacing: '0.5px'
          }}>
            ⚔️ Forjado en las tierras de código ⚔️
          </span>
          <Shield size={20} color="#FFD700" />
        </div>

        {/* Decoraciones laterales */}
        <div style={{
          position: 'absolute',
          left: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '8px',
          height: '20px',
          background: 'linear-gradient(180deg, #FFD700, #FFA500)',
          borderRadius: '4px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '8px',
          height: '20px',
          background: 'linear-gradient(180deg, #FFD700, #FFA500)',
          borderRadius: '4px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
        }}></div>
      </div>
    </div>
  );
};

export default VillageFooter;
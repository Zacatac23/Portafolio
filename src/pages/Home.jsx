// src/pages/Home.jsx - Solo Lógica con música (después del index)
import React, { useState, useEffect } from 'react';
import MapLayout from '../components/MapLayout';
import InfoPanel from '../components/InfoPanel';
import LoadingScreen from '../components/LoadingScreen';
import VillageFooter from '../components/VillageFooter';
import VillageBackground from '../components/VillageBackground';
import audioManager from '../utils/SimpleAudioManager';
import { portfolioData, buildingsConfig } from '../data/portafolioData';

const Home = ({ onNavigate }) => {
  // Estados del componente
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [isVillageLoaded, setIsVillageLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Efecto de carga SIN música (la música viene del index)
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVillageLoaded(true);
            
            // SOLO CUANDO LA ALDEA ESTÉ COMPLETAMENTE CARGADA, iniciar música del Home
            setTimeout(() => {
              let musicStarted = false;
              const startHomeMusic = () => {
                if (!musicStarted) {
                  audioManager.playMusic('/audio/home-music.mp3');
                  musicStarted = true;
                  document.removeEventListener('click', startHomeMusic);
                  document.removeEventListener('touchstart', startHomeMusic);
                  console.log('Música del Home iniciada');
                }
              };
              
              document.addEventListener('click', startHomeMusic);
              document.addEventListener('touchstart', startHomeMusic);
            }, 1000); // Esperar 1 segundo después de que aparezca la aldea
            
          }, 800);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Función para obtener contenido de edificios
  function getBuildingContent(buildingId) {
    switch (buildingId) {
      case 'townhall':
        return {
          bio: "¡Saludos, valiente visitante! Soy un desarrollador apasionado por crear experiencias digitales épicas. Como un maestro constructor de Clash of Clans, planifico cada proyecto con estrategia y ejecuto con precisión.",
          skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git'],
          achievements: ['500+ commits este año', '10 proyectos completados', '3 hackathons ganados']
        };
      case 'laboratory':
        return {
          frontend: portfolioData.skills.frontend,
          backend: portfolioData.skills.backend,
          tools: portfolioData.skills.tools,
          learning: portfolioData.skills.learning
        };
      case 'barracks':
        return {
          projects: portfolioData.projects
        };
      case 'castle':
        return {
          experience: portfolioData.experience
        };
      case 'wizardtower':
        return {
          email: portfolioData.player.email,
          linkedin: portfolioData.player.linkedin,
          github: portfolioData.player.github,
          phone: portfolioData.player.phone,
          location: portfolioData.player.location
        };
      default:
        return {};
    }
  }

  // Preparar datos de edificios con contenido
  const buildingsWithContent = buildingsConfig.map(building => ({
    ...building,
    content: getBuildingContent(building.id)
  }));

  // Manejadores de eventos
  const handleBuildingClick = (building) => {
    setSelectedBuilding(building);
  };

  const handleClosePanel = () => {
    setSelectedBuilding(null);
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Pantalla de carga */}
      {!isVillageLoaded && (
        <LoadingScreen loadingProgress={loadingProgress} />
      )}

      {/* Fondo de la aldea */}
      <VillageBackground />

      {/* Mapa de la aldea */}
      <MapLayout 
        buildings={buildingsWithContent}
        onBuildingClick={handleBuildingClick}
      />

      {/* Panel de información del edificio */}
      <InfoPanel 
        building={selectedBuilding}
        onClose={handleClosePanel}
        onNavigate={onNavigate}
        playerData={portfolioData.player}
      />

      {/* Footer de la aldea */}
      <VillageFooter />
    </div>
  );
};

export default Home;
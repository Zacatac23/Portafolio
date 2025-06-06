// src/pages/ProjectDetails.jsx
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Github, ExternalLink, Star, Trophy, Target, Lightbulb, Code, Zap } from 'lucide-react';

const ProjectDetails = ({ project, onNavigate }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{
        background: 'linear-gradient(135deg, #EF4444, #F97316)'
      }}>
        <div className="text-center text-white">
          <div style={{fontSize: '3.75rem', marginBottom: 'var(--space-4)'}}>❌</div>
          <h2 className="text-2xl font-bold mb-4">Proyecto no encontrado</h2>
          <button 
            onClick={() => onNavigate('home')}
            className="btn"
            style={{
              background: 'white',
              color: '#DC2626'
            }}
          >
            Volver a la Aldea
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Resumen', icon: Target },
    { id: 'features', label: 'Características', icon: Star },
    { id: 'tech', label: 'Tecnologías', icon: Code },
    { id: 'challenges', label: 'Desafíos', icon: Trophy }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Target className="text-blue-600" />
                Descripción del Proyecto
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {project.detailedDescription}
              </p>
            </div>

            <div className="grid gap-6" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
              <div style={{
                background: 'linear-gradient(135deg, #F0FDF4, #DCFCE7)',
                borderRadius: 'var(--radius-2xl)',
                padding: 'var(--space-6)',
                border: '2px solid #86EFAC'
              }}>
                <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <Lightbulb className="text-yellow-500" />
                  Lo que Aprendí
                </h4>
                <p className="text-green-700">{project.learned}</p>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #FAF5FF, #F3E8FF)',
                borderRadius: 'var(--radius-2xl)',
                padding: 'var(--space-6)',
                border: '2px solid #D8B4FE'
              }}>
                <h4 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                  <Trophy className="text-yellow-500" />
                  Principales Desafíos
                </h4>
                <p className="text-purple-700">{project.challenges}</p>
              </div>
            </div>
          </div>
        );

      case 'features':
        return (
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Star className="text-yellow-500" />
                Características Principales
              </h3>
              <div className="grid gap-4" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div style={{
                      width: '2rem',
                      height: '2rem',
                      background: '#3B82F6',
                      borderRadius: 'var(--radius-full)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 'var(--font-size-sm)',
                      flexShrink: 0
                    }}>
                      {index + 1}
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'tech':
        return (
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Code className="text-blue-600" />
                Stack Tecnológico
              </h3>
              <div className="grid gap-4" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))'}}>
                {project.tech.map((tech, index) => (
                  <div key={index} className="text-center p-4 rounded-xl border border-blue-200 hover:scale-105 transition-transform" style={{
                    background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)'
                  }}>
                    <div className="mb-2" style={{fontSize: '1.875rem'}}>
                      {tech === 'React' && '⚛️'}
                      {tech === 'Node.js' && '🟢'}
                      {tech === 'MongoDB' && '🍃'}
                      {tech === 'Vue.js' && '💚'}
                      {tech === 'Firebase' && '🔥'}
                      {tech === 'Python' && '🐍'}
                      {tech === 'JavaScript' && '💛'}
                      {!['React', 'Node.js', 'MongoDB', 'Vue.js', 'Firebase', 'Python', 'JavaScript'].includes(tech) && '⚡'}
                    </div>
                    <span className="font-semibold text-blue-800">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'challenges':
        return (
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Trophy className="text-yellow-500" />
                Desafíos y Soluciones
              </h3>
              
              <div className="space-y-6">
                <div style={{
                  background: 'linear-gradient(to right, #FEF2F2, #FFF7ED)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-6)',
                  borderLeft: '4px solid #F87171'
                }}>
                  <h4 className="font-bold text-red-800 mb-3">🎯 Desafío Principal</h4>
                  <p className="text-red-700 mb-4">{project.challenges}</p>
                  
                  <div className="bg-white rounded-lg p-4 border border-red-200">
                    <h5 className="font-semibold text-gray-800 mb-2">💡 Solución Implementada:</h5>
                    <p className="text-gray-700">{project.learned}</p>
                  </div>
                </div>
                
                <div style={{
                  background: 'linear-gradient(to right, #F0FDF4, #ECFDF5)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-6)',
                  borderLeft: '4px solid #4ADE80'
                }}>
                  <h4 className="font-bold text-green-800 mb-3">📈 Resultados Obtenidos</h4>
                  <ul className="space-y-2 text-green-700">
                    <li className="flex items-center gap-2">
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: '#10B981',
                        borderRadius: 'var(--radius-full)'
                      }}></div>
                      Proyecto completado exitosamente
                    </li>
                    <li className="flex items-center gap-2">
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: '#10B981',
                        borderRadius: 'var(--radius-full)'
                      }}></div>
                      Habilidades técnicas mejoradas
                    </li>
                    <li className="flex items-center gap-2">
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: '#10B981',
                        borderRadius: 'var(--radius-full)'
                      }}></div>
                      Experiencia valiosa adquirida
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #8B5CF6, #3B82F6, #4338CA)'
    }}>
      {/* Header del proyecto */}
      <div className="relative">
        {/* Botón de regreso */}
        <button
          onClick={() => onNavigate('home')}
          className="absolute z-20 p-3 rounded-full transition-all backdrop-blur"
          style={{
            top: 'var(--space-6)',
            left: 'var(--space-6)',
            background: 'rgba(255, 255, 255, 0.2)',
            color: 'white'
          }}
          onMouseOver={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
          onMouseOut={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
        >
          <ArrowLeft size={24} />
        </button>

        {/* Hero section del proyecto */}
        <div style={{paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-12)', padding: 'var(--space-6)'}}>
          <div className="container text-center">
            <div className={`transition-all ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`} 
                 style={{transitionDuration: '1s'}}>
              <div style={{fontSize: '5rem', marginBottom: 'var(--space-6)'}}>{project.image}</div>
              <h1 className="font-bold text-white mb-4" style={{fontSize: 'var(--font-size-5xl)'}}>{project.name}</h1>
              <p className="text-xl mb-8 mx-auto" style={{color: 'rgba(147, 197, 253, 1)', maxWidth: '42rem'}}>{project.description}</p>
              
              {/* Botones de acción */}
              <div className="flex justify-center gap-4" style={{flexWrap: 'wrap'}}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn transition-all hover:scale-105"
                  style={{
                    background: '#374151',
                    color: 'white',
                    textDecoration: 'none'
                  }}
                >
                  <Github size={20} />
                  Ver Código
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn transition-all hover:scale-105"
                  style={{
                    background: 'linear-gradient(to right, #10B981, #059669)',
                    color: 'white',
                    textDecoration: 'none'
                  }}
                >
                  <ExternalLink size={20} />
                  Ver Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div style={{padding: '0 var(--space-6)', paddingBottom: 'var(--space-12)'}}>
        <div className="container">
          {/* Navegación por tabs */}
          <div className="flex justify-center gap-2 mb-8" style={{flexWrap: 'wrap'}}>
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`btn flex items-center gap-2 font-semibold transition-all ${
                    activeTab === tab.id ? 'scale-105' : ''
                  }`}
                  style={{
                    background: activeTab === tab.id 
                      ? 'white' 
                      : 'rgba(255, 255, 255, 0.2)',
                    color: activeTab === tab.id 
                      ? '#8B5CF6' 
                      : 'white',
                    boxShadow: activeTab === tab.id 
                      ? 'var(--shadow-lg)' 
                      : 'none'
                  }}
                  onMouseOver={(e) => {
                    if (activeTab !== tab.id) {
                      e.target.style.background = 'rgba(255, 255, 255, 0.3)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activeTab !== tab.id) {
                      e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                    }
                  }}
                >
                  <IconComponent size={20} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Contenido de las tabs */}
          <div className={`transition-all ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`} 
               style={{transitionDuration: '0.5s'}}>
            {renderTabContent()}
          </div>
        </div>
      </div>

      {/* Footer con navegación */}
      <div style={{padding: '0 var(--space-6)', paddingBottom: 'var(--space-6)'}}>
        <div className="container text-center">
          <div className="p-6 rounded-2xl backdrop-blur" style={{
            background: 'rgba(255, 255, 255, 0.1)'
          }}>
            <p className="text-white mb-4">¿Te gustó este proyecto? ¡Explora más en mi aldea!</p>
            <div className="flex justify-center gap-4" style={{flexWrap: 'wrap'}}>
              <button
                onClick={() => onNavigate('home')}
                className="btn font-semibold transition-all hover:scale-105"
                style={{
                  background: 'linear-gradient(to right, #EAB308, #F97316)',
                  color: 'white'
                }}
              >
                🏰 Volver a la Aldea
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="btn font-semibold transition-all hover:scale-105"
                style={{
                  background: 'linear-gradient(to right, #8B5CF6, #EC4899)',
                  color: 'white'
                }}
              >
                💌 Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
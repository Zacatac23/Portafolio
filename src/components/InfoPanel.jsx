// src/components/InfoPanel.jsx - Con Imágenes Reales
import React from 'react';
import { X, Github, Linkedin, Mail, Download, ExternalLink, Code, Palette, Globe, Smartphone, Database, Zap, Star, Shield, Sword, Crown } from 'lucide-react';

const InfoPanel = ({ building, onClose, onNavigate, playerData }) => {
  if (!building) return null;

  // URLs de imágenes reales para los modales
  const getBuildingImage = (buildingId) => {
    const images = {
      'townhall': 'https://static.wikia.nocookie.net/clashofclans/images/1/10/Town_Hall13.png',
      'laboratory': 'https://static.wikia.nocookie.net/clashofclans/images/9/9a/Laboratory10.png',
      'barracks': 'https://static.wikia.nocookie.net/clashofclans/images/c/c8/Barracks10.png',
      'castle': 'https://static.wikia.nocookie.net/clashofclans/images/f/fc/Clan_Castle8.png',
      'wizardtower': 'https://static.wikia.nocookie.net/clashofclans/images/4/4b/Wizard_Tower13.png'
    };
    return images[buildingId] || images['townhall'];
  };

  // Iconos de tecnologías
  const getTechIcon = (tech) => {
    const icons = {
      'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    };
    return icons[tech] || null;
  };

  const renderTownHallContent = () => (
    <div className="space-y-6">
      <div className="text-center">
        {/* Avatar del desarrollador con imagen del edificio */}
        <div style={{
          width: '120px',
          height: '120px',
          background: 'linear-gradient(135deg, #FFD700, #FFA500)',
          borderRadius: '50%',
          margin: '0 auto 1rem auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '4px solid #E65100',
          boxShadow: '0 0 30px rgba(255, 215, 0, 0.5)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <img
            src={getBuildingImage('townhall')}
            alt="Town Hall"
            style={{
              width: '80px',
              height: '80px',
              objectFit: 'contain',
              filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div style={{
            display: 'none',
            fontSize: '4rem'
          }}>
            👨‍💻
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{playerData.name}</h3>
        <p className="text-lg text-gray-600 mb-4">{playerData.title}</p>
        <p className="text-gray-700 leading-relaxed">{building.content.bio}</p>
      </div>
      
      <div className="grid gap-6" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>
        <div className="bg-white rounded-xl p-4 border-2 border-blue-200">
          <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
            <Code size={20} /> Habilidades Principales
          </h4>
          <div className="flex gap-2" style={{flexWrap: 'wrap'}}>
            {building.content.skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium">
                {getTechIcon(skill) && (
                  <img 
                    src={getTechIcon(skill)} 
                    alt={skill}
                    style={{width: '16px', height: '16px'}}
                    onError={(e) => e.target.style.display = 'none'}
                  />
                )}
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 border-2 border-green-200">
          <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
            <Star size={20} /> Logros Recientes
          </h4>
          <ul className="space-y-2">
            {building.content.achievements.map((achievement, index) => (
              <li key={index} className="flex items-center gap-2 text-green-700">
                <Crown size={16} className="text-yellow-500" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const renderLaboratoryContent = () => (
    <div className="space-y-6">
      {/* Header con imagen del laboratorio */}
      <div className="text-center mb-6">
        <img
          src={getBuildingImage('laboratory')}
          alt="Laboratory"
          style={{
            width: '80px',
            height: '80px',
            objectFit: 'contain',
            margin: '0 auto',
            filter: 'drop-shadow(0 0 10px #E91E63)'
          }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div style={{display: 'none', fontSize: '4rem', textAlign: 'center'}}>🧪</div>
        <h3 className="text-xl font-bold text-purple-800 mt-2">Laboratorio de Habilidades</h3>
      </div>

      <div className="grid gap-6" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>
        <div style={{
          background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-4)',
          border: '2px solid #93C5FD'
        }}>
          <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
            <Globe size={20} /> Frontend
          </h4>
          <div className="space-y-2">
            {building.content.frontend.map((tech, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getTechIcon(tech) ? (
                    <img 
                      src={getTechIcon(tech)} 
                      alt={tech}
                      style={{width: '20px', height: '20px'}}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                  ) : null}
                  <div style={{
                    width: '12px',
                    height: '12px',
                    background: '#10B981',
                    borderRadius: '50%',
                    display: getTechIcon(tech) ? 'none' : 'block'
                  }}></div>
                  <span className="text-green-700">{tech}</span>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className={`${i < 3 ? 'text-yellow-400' : 'text-gray-300'}`}
                          style={{fill: i < 3 ? 'currentColor' : 'none'}} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #F0FDF4, #DCFCE7)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-4)',
          border: '2px solid #86EFAC'
        }}>
          <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
            <Database size={20} /> Backend
          </h4>
          <div className="space-y-2">
            {building.content.backend.map((tech, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getTechIcon(tech) ? (
                    <img 
                      src={getTechIcon(tech)} 
                      alt={tech}
                      style={{width: '20px', height: '20px'}}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                  ) : null}
                  <div style={{
                    width: '12px',
                    height: '12px',
                    background: '#3B82F6',
                    borderRadius: '50%',
                    display: getTechIcon(tech) ? 'none' : 'block'
                  }}></div>
                  <span className="text-blue-700">{tech}</span>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className={`${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} 
                          style={{fill: i < 4 ? 'currentColor' : 'none'}} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div style={{
          background: 'linear-gradient(135deg, #FAF5FF, #F3E8FF)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-4)',
          border: '2px solid #D8B4FE'
        }}>
          <h4 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
            <Zap size={20} /> Herramientas
          </h4>
          <div className="space-y-2">
            {building.content.tools.map((tool, index) => (
              <div key={index} className="flex items-center gap-2">
                {getTechIcon(tool) ? (
                  <img 
                    src={getTechIcon(tool)} 
                    alt={tool}
                    style={{width: '16px', height: '16px'}}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                ) : null}
                <div style={{
                  width: '12px',
                  height: '12px',
                  background: '#8B5CF6',
                  borderRadius: '50%',
                  display: getTechIcon(tool) ? 'none' : 'block'
                }}></div>
                <span className="text-purple-700">{tool}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div style={{
          background: 'linear-gradient(135deg, #FFF7ED, #FED7AA)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-4)',
          border: '2px solid #FBB071'
        }}>
          <h4 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
            <Smartphone size={20} /> Aprendiendo
          </h4>
          <div className="space-y-2">
            {building.content.learning.map((tech, index) => (
              <div key={index} className="flex items-center gap-2">
                {getTechIcon(tech) ? (
                  <img 
                    src={getTechIcon(tech)} 
                    alt={tech}
                    style={{width: '16px', height: '16px'}}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                ) : null}
                <div style={{
                  width: '12px',
                  height: '12px',
                  background: '#F97316',
                  borderRadius: '50%',
                  display: getTechIcon(tech) ? 'none' : 'block'
                }} className="animate-pulse"></div>
                <span className="text-orange-800">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderBarracksContent = () => (
    <div className="space-y-6">
      {/* Header con imagen del barracks */}
      <div className="text-center mb-6">
        <img
          src={getBuildingImage('barracks')}
          alt="Barracks"
          style={{
            width: '80px',
            height: '80px',
            objectFit: 'contain',
            margin: '0 auto',
            filter: 'drop-shadow(2px 2px 6px rgba(191, 54, 12, 0.6))'
          }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div style={{display: 'none', fontSize: '4rem', textAlign: 'center'}}>⚔️</div>
        <h3 className="text-xl font-bold text-red-800 mt-2">Cuartel de Proyectos</h3>
      </div>

      <div className="grid gap-6">
        {building.content.projects.map((project, index) => (
          <div key={index} className="card hover:scale-105 transition-all">
            <div className="flex items-start gap-4">
              <div style={{
                fontSize: '3rem',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)',
                borderRadius: '15px',
                border: '2px solid #F59E0B',
                filter: 'drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.1))'
              }}>
                {project.image}
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex gap-2 mb-4" style={{flexWrap: 'wrap'}}>
                  {project.tech.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {getTechIcon(tech) && (
                        <img 
                          src={getTechIcon(tech)} 
                          alt={tech}
                          style={{width: '14px', height: '14px'}}
                          onError={(e) => e.target.style.display = 'none'}
                        />
                      )}
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-3" style={{flexWrap: 'wrap'}}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                      background: '#374151',
                      color: 'white',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={16} />
                    Código
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{textDecoration: 'none'}}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <button
                    onClick={() => onNavigate('project-details', project)}
                    className="btn btn-secondary"
                  >
                    <Sword size={16} />
                    Detalles
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCastleContent = () => (
    <div className="space-y-6">
      {/* Header con imagen del castle */}
      <div className="text-center mb-6">
        <img
          src={getBuildingImage('castle')}
          alt="Castle"
          style={{
            width: '80px',
            height: '80px',
            objectFit: 'contain',
            margin: '0 auto',
            filter: 'drop-shadow(2px 2px 6px rgba(84, 110, 122, 0.6))'
          }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div style={{display: 'none', fontSize: '4rem', textAlign: 'center'}}>🏰</div>
        <h3 className="text-xl font-bold text-gray-800 mt-2">Fortaleza de Experiencia</h3>
      </div>

      {building.content.experience.map((exp, index) => (
        <div key={index} className="card">
          <div className="flex items-start gap-4">
            <div style={{
              width: '3rem',
              height: '3rem',
              background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              border: '3px solid white',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}>
              {exp.company.charAt(0)}
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-gray-800">{exp.title}</h4>
              <p className="text-blue-600 font-semibold">{exp.company}</p>
              <p className="text-gray-500 mb-3">{exp.period}</p>
              <p className="text-gray-700 mb-4">{exp.description}</p>
              
              <div className="space-y-2">
                <h5 className="font-semibold text-gray-800">Logros destacados:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderWizardTowerContent = () => (
    <div className="space-y-6">
      {/* Header con imagen de la wizard tower */}
      <div className="text-center mb-6">
        <img
          src={getBuildingImage('wizardtower')}
          alt="Wizard Tower"
          style={{
            width: '80px',
            height: '80px',
            objectFit: 'contain',
            margin: '0 auto',
            filter: 'drop-shadow(0 0 15px #E91E63)'
          }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div style={{display: 'none', fontSize: '4rem', textAlign: 'center'}}>🔮</div>
        <h3 className="text-xl font-bold text-purple-800 mt-2">Torre de Comunicación</h3>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">¡Conectemos y construyamos algo épico juntos!</h3>
        <p className="text-gray-600 mb-6">¿Tienes un proyecto en mente? ¿Buscas un desarrollador para tu equipo? ¡Hablemos!</p>
      </div>
      
      <div className="grid gap-4" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>
        <a
          href={`mailto:${building.content.email}`}
          className="flex items-center gap-3 p-4 rounded-xl transition-colors"
          style={{
            background: '#FEE2E2',
            border: '2px solid #FCA5A5',
            textDecoration: 'none'
          }}
          onMouseOver={(e) => e.target.closest('a').style.background = '#FECACA'}
          onMouseOut={(e) => e.target.closest('a').style.background = '#FEE2E2'}
        >
          <Mail className="text-red-600" size={24} />
          <div>
            <p className="font-semibold text-red-800">Email</p>
            <p className="text-red-600">{building.content.email}</p>
          </div>
        </a>
        
        <a
          href={`https://${building.content.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-xl transition-colors"
          style={{
            background: '#DBEAFE',
            border: '2px solid #93C5FD',
            textDecoration: 'none'
          }}
          onMouseOver={(e) => e.target.closest('a').style.background = '#BFDBFE'}
          onMouseOut={(e) => e.target.closest('a').style.background = '#DBEAFE'}
        >
          <Linkedin className="text-blue-600" size={24} />
          <div>
            <p className="font-semibold text-blue-800">LinkedIn</p>
            <p className="text-blue-600">Perfil profesional</p>
          </div>
        </a>
        
        <a
          href={`https://${building.content.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-xl transition-colors"
          style={{
            background: '#F3F4F6',
            border: '2px solid #D1D5DB',
            textDecoration: 'none'
          }}
          onMouseOver={(e) => e.target.closest('a').style.background = '#E5E7EB'}
          onMouseOut={(e) => e.target.closest('a').style.background = '#F3F4F6'}
        >
          <Github className="text-gray-600" size={24} />
          <div>
            <p className="font-semibold text-gray-800">GitHub</p>
            <p className="text-gray-600">Repositorios</p>
          </div>
        </a>
        
        <div className="flex items-center gap-3 p-4 rounded-xl" style={{
          background: '#DCFCE7',
          border: '2px solid #86EFAC'
        }}>
          <Globe className="text-green-600" size={24} />
          <div>
            <p className="font-semibold text-green-800">Ubicación</p>
            <p className="text-green-600">{building.content.location}</p>
          </div>
        </div>
      </div>
      
      <div className="text-center pt-4">
        <button 
          onClick={() => onNavigate('contact')}
          className="btn btn-primary mx-auto"
        >
          <Download size={20} />
          Descargar CV
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (building.id) {
      case 'townhall':
        return renderTownHallContent();
      case 'laboratory':
        return renderLaboratoryContent();
      case 'barracks':
        return renderBarracksContent();
      case 'castle':
        return renderCastleContent();
      case 'wizardtower':
        return renderWizardTowerContent();
      default:
        return <div>Contenido en construcción...</div>;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title">
            <div className="modal-icon">
              <img
                src={getBuildingImage(building.id)}
                alt={building.title}
                style={{
                  width: '32px',
                  height: '32px',
                  objectFit: 'contain'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div style={{display: 'none', fontSize: '1.5rem'}}>
                {building.id === 'townhall' && '🏛️'}
                {building.id === 'laboratory' && '🧪'}
                {building.id === 'barracks' && '⚔️'}
                {building.id === 'castle' && '🏰'}
                {building.id === 'wizardtower' && '🔮'}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{building.title}</h2>
              <p style={{color: 'rgba(255, 215, 0, 0.8)'}}>Nivel {building.level}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="modal-close"
          >
            <X size={24} />
          </button>
        </div>

        <div className="modal-body">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
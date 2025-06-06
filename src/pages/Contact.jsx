// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, Download, Send, MessageCircle, Calendar, Star } from 'lucide-react';
import { portfolioData } from '../data/portafolioData';

const Contact = ({ onNavigate }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío de formulario
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 2000);
  };

  const downloadCV = () => {
    // Simular descarga de CV
    alert('¡Funcionalidad de descarga de CV! Aquí se descargaría el archivo PDF.');
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #4338CA, #8B5CF6, #EC4899)'
    }}>
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="decoration animate-bounce" style={{
          position: 'absolute',
          top: '5rem',
          left: '2.5rem',
          fontSize: '3.75rem',
          opacity: 0.2
        }}>🔮</div>
        <div className="decoration animate-pulse" style={{
          position: 'absolute',
          top: '10rem',
          right: '5rem',
          fontSize: '2.5rem',
          opacity: 0.3
        }}>✨</div>
        <div className="decoration animate-float" style={{
          position: 'absolute',
          bottom: '5rem',
          left: '5rem',
          fontSize: '3rem',
          opacity: 0.25
        }}>🪄</div>
        <div className="decoration animate-bounce" style={{
          position: 'absolute',
          bottom: '10rem',
          right: '2.5rem',
          fontSize: '1.875rem',
          opacity: 0.2,
          animationDelay: '1s'
        }}>⭐</div>
      </div>

      {/* Header */}
      <div className="relative z-10">
        <button
          onClick={() => onNavigate('home')}
          className="absolute p-3 rounded-full transition-all backdrop-blur"
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

        <div className="text-center" style={{paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-8)'}}>
          <div className={`transition-all ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`} 
               style={{transitionDuration: '1s'}}>
            <div style={{fontSize: '3.75rem', marginBottom: 'var(--space-4)'}}>🏰</div>
            <h1 className="font-bold text-white mb-4" style={{fontSize: 'var(--font-size-4xl)'}}>Portal de Comunicación</h1>
            <p className="text-xl mx-auto px-6" style={{
              color: 'rgba(196, 181, 253, 1)',
              maxWidth: '42rem'
            }}>
              ¡Conectemos y construyamos algo épico juntos! Envíame un mensaje o descarga mi CV.
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 px-6 pb-12">
        <div className="container">
          <div className="grid gap-8" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))'}}>
            {/* Información de contacto */}
            <div className={`transition-all delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0 -translate-x-10'}`} 
                 style={{transitionDuration: '1s'}}>
              <div className="card-glass backdrop-blur p-8 border border-white" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <MessageCircle className="text-yellow-400" />
                  Información de Contacto
                </h2>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4 p-4 rounded-xl transition-all" style={{
                    background: 'rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseOver={(e) => e.target.closest('div').style.background = 'rgba(255, 255, 255, 0.2)'}
                  onMouseOut={(e) => e.target.closest('div').style.background = 'rgba(255, 255, 255, 0.1)'}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      background: '#EF4444',
                      borderRadius: 'var(--radius-full)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <a href={`mailto:${portfolioData.player.email}`} 
                         className="transition-colors"
                         style={{color: 'rgba(252, 165, 165, 1)', textDecoration: 'none'}}
                         onMouseOver={(e) => e.target.style.color = 'rgba(254, 202, 202, 1)'}
                         onMouseOut={(e) => e.target.style.color = 'rgba(252, 165, 165, 1)'}>
                        {portfolioData.player.email}
                      </a>
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="flex items-center gap-4 p-4 rounded-xl transition-all" style={{
                    background: 'rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseOver={(e) => e.target.closest('div').style.background = 'rgba(255, 255, 255, 0.2)'}
                  onMouseOut={(e) => e.target.closest('div').style.background = 'rgba(255, 255, 255, 0.1)'}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      background: '#10B981',
                      borderRadius: 'var(--radius-full)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Teléfono</p>
                      <p style={{color: 'rgba(134, 239, 172, 1)'}}>{portfolioData.player.phone}</p>
                    </div>
                  </div>

                  {/* Ubicación */}
                  <div className="flex items-center gap-4 p-4 rounded-xl transition-all" style={{
                    background: 'rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseOver={(e) => e.target.closest('div').style.background = 'rgba(255, 255, 255, 0.2)'}
                  onMouseOut={(e) => e.target.closest('div').style.background = 'rgba(255, 255, 255, 0.1)'}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      background: '#3B82F6',
                      borderRadius: 'var(--radius-full)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Ubicación</p>
                      <p style={{color: 'rgba(147, 197, 253, 1)'}}>{portfolioData.player.location}</p>
                    </div>
                  </div>
                </div>

                {/* Redes sociales */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Sígueme en:</h3>
                  <div className="flex gap-4">
                    <a
                      href={`https://${portfolioData.player.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-all hover:scale-110"
                      style={{
                        width: '3rem',
                        height: '3rem',
                        background: '#374151',
                        borderRadius: 'var(--radius-full)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      onMouseOver={(e) => e.target.style.background = '#4B5563'}
                      onMouseOut={(e) => e.target.style.background = '#374151'}
                    >
                      <Github className="text-white" size={24} />
                    </a>
                    <a
                      href={`https://${portfolioData.player.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-all hover:scale-110"
                      style={{
                        width: '3rem',
                        height: '3rem',
                        background: '#2563EB',
                        borderRadius: 'var(--radius-full)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      onMouseOver={(e) => e.target.style.background = '#1D4ED8'}
                      onMouseOut={(e) => e.target.style.background = '#2563EB'}
                    >
                      <Linkedin className="text-white" size={24} />
                    </a>
                  </div>
                </div>

                {/* Botón de descarga de CV */}
                <div className="mt-8">
                  <button
                    onClick={downloadCV}
                    className="btn w-full font-semibold transition-all hover:scale-105"
                    style={{
                      background: 'linear-gradient(to right, #EAB308, #F97316)',
                      color: 'white'
                    }}
                  >
                    <Download size={20} />
                    Descargar CV
                  </button>
                </div>
              </div>
            </div>

            {/* Formulario de contacto */}
            <div className={`transition-all delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-x-10'}`} 
                 style={{transitionDuration: '1s'}}>
              <div className="card-glass backdrop-blur p-8 border border-white" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Send className="text-yellow-400" />
                  Envíame un Mensaje
                </h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 rounded-xl border" style={{
                    background: 'rgba(34, 197, 94, 0.2)',
                    borderColor: '#4ADE80'
                  }}>
                    <p className="flex items-center gap-2" style={{color: 'rgba(134, 239, 172, 1)'}}>
                      <Star className="text-yellow-400" />
                      ¡Mensaje enviado con éxito! Te responderé pronto.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'}}>
                    <div className="form-group">
                      <label className="form-label">Nombre *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="tu.email@ejemplo.com"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Asunto *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="¿De qué quieres hablar?"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Mensaje *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="form-input form-textarea resize-none"
                      placeholder="Cuéntame sobre tu proyecto, idea o cualquier cosa que quieras compartir..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn w-full font-semibold transition-all hover:scale-105 ${
                      isSubmitting ? 'cursor-not-allowed opacity-60' : ''
                    }`}
                    style={{
                      background: isSubmitting 
                        ? '#6B7280' 
                        : 'linear-gradient(to right, #8B5CF6, #EC4899)',
                      color: 'white'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin border-2 border-white border-t-transparent rounded-full" 
                             style={{width: '1.25rem', height: '1.25rem'}}></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Disponibilidad */}
          <div className={`mt-8 transition-all delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`} 
               style={{transitionDuration: '1s'}}>
            <div className="card-glass backdrop-blur p-6 border border-white text-center" style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(255, 255, 255, 0.2)'
            }}>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                <Calendar className="text-green-400" />
                Disponibilidad Actual
              </h3>
              <div className="grid gap-4 text-center" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'}}>
                <div className="p-4 rounded-xl" style={{background: 'rgba(34, 197, 94, 0.2)'}}>
                  <p className="font-semibold" style={{color: 'rgba(134, 239, 172, 1)'}}>🟢 Disponible para proyectos freelance</p>
                </div>
                <div className="p-4 rounded-xl" style={{background: 'rgba(59, 130, 246, 0.2)'}}>
                  <p className="font-semibold" style={{color: 'rgba(147, 197, 253, 1)'}}>💼 Abierto a oportunidades laborales</p>
                </div>
                <div className="p-4 rounded-xl" style={{background: 'rgba(139, 92, 246, 0.2)'}}>
                  <p className="font-semibold" style={{color: 'rgba(196, 181, 253, 1)'}}>🤝 Interesado en colaboraciones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 px-6 pb-6">
        <div className="container text-center">
          <button
            onClick={() => onNavigate('home')}
            className="btn font-semibold transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(to right, #EAB308, #F97316)',
              color: 'white'
            }}
          >
            🏰 Regresar a la Aldea
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
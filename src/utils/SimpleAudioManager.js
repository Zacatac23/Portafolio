// src/utils/SimpleAudioManager.js - Sistema básico de música
class SimpleAudioManager {
  constructor() {
    this.currentAudio = null;
    this.isEnabled = true;
    this.volume = 0.3;
  }

  // Reproducir música
  async playMusic(audioSrc, loop = true) {
    if (!this.isEnabled) return;

    try {
      // Detener música actual si existe
      if (this.currentAudio) {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      }

      // Crear nuevo audio
      this.currentAudio = new Audio(audioSrc);
      this.currentAudio.volume = this.volume;
      this.currentAudio.loop = loop;
      
      // Reproducir
      await this.currentAudio.play();
      
    } catch (error) {
      console.warn('Error al reproducir música:', error);
    }
  }

  // Detener música
  stopMusic() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
  }

  // Pausar música
  pauseMusic() {
    if (this.currentAudio) {
      this.currentAudio.pause();
    }
  }

  // Reanudar música
  resumeMusic() {
    if (this.currentAudio) {
      this.currentAudio.play().catch(error => {
        console.warn('Error al reanudar música:', error);
      });
    }
  }

  // Cambiar volumen
  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume));
    if (this.currentAudio) {
      this.currentAudio.volume = this.volume;
    }
  }

  // Activar/desactivar música
  setEnabled(enabled) {
    this.isEnabled = enabled;
    if (!enabled) {
      this.stopMusic();
    }
  }

  // Verificar si está reproduciendo
  isPlaying() {
    return this.currentAudio && !this.currentAudio.paused;
  }
}

// Crear instancia global
const audioManager = new SimpleAudioManager();

// Inicializar con el primer clic del usuario
let audioInitialized = false;

const initAudio = () => {
  if (!audioInitialized) {
    audioInitialized = true;
    // Remover listeners
    document.removeEventListener('click', initAudio);
    document.removeEventListener('touchstart', initAudio);
  }
};

// Esperar primer evento de usuario
document.addEventListener('click', initAudio);
document.addEventListener('touchstart', initAudio);

export default audioManager;
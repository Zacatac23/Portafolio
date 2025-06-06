// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'        // ← Variables y utilidades
import './styles/animations.css'   // ← Animaciones Clash
import './styles/componentes.css'   // ← Componentes específicos
import './App.css'                 // ← Utilidades tipo Tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
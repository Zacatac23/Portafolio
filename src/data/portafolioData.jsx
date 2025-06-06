// src/data/portfolioData.js

export const portfolioData = {
  player: {
    name: "Jonathan Josue Zacarias Bances",
    title: "Desarrollador Full Stack",
    level: 85,
    clan: "DevWarriors",
    trophies: 3247,
    description: "Apasionado desarrollador con enfoque en crear experiencias intuitivas y dinámicas, desde apps móviles con Jetpack Compose hasta simulaciones físicas en C y proyectos interactivos en HTML. Me impulsa la curiosidad por combinar tecnología, ciencia y diseño para resolver problemas de forma creativa y precisa.",
    email: "jonathanzacaeias@gmail.com",
    linkedin: "linkedin.com/in/jonathan-zacarias",
    github: "github.com/zacatac23",
    phone: "+502 1234-5678", // Actualiza con tu número real
    location: "Guatemala City, Guatemala" // Actualiza si es diferente
  },
  
  skills: {
    frontend: [
      'HTML5', 
      'CSS3', 
      'JavaScript ES6+', 
      'React', 
      'Vue.js', 
      'Tailwind CSS',
      'TypeScript',
      'Sass/SCSS',
      'Jetpack Compose'
    ],
    backend: [
      'Node.js', 
      'Express', 
      'Python', 
      'Django', 
      'PostgreSQL', 
      'MongoDB',
      'MySQL',
      'REST APIs',
      'C'
    ],
    tools: [
      'Git', 
      'Docker', 
      'AWS', 
      'Figma', 
      'VS Code', 
      'Postman',
      'Webpack',
      'Vite',
      'Android Studio'
    ],
    learning: [
      'TypeScript', 
      'GraphQL', 
      'Next.js', 
      'Kubernetes',
      'React Native',
      'Three.js',
      'Kotlin',
      'Flutter'
    ]
  },
  
  projects: [
    {
      id: 1,
      name: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, sistema de pagos y gestión de inventario.',
      detailedDescription: 'Una aplicación web completa de e-commerce desarrollada con tecnologías modernas. Incluye autenticación de usuarios, catálogo de productos dinámico, carrito de compras persistente, integración con pasarelas de pago, y panel de administración completo para la gestión de productos y pedidos.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT', 'Tailwind CSS'],
      github: 'https://github.com/zacatac23/ecommerce-platform',
      demo: 'https://effortless-choux-7c7dd7.netlify.app/',
      image: '🛒',
      features: [
        'Sistema completo de autenticación y autorización',
        'Catálogo de productos con filtros avanzados y búsqueda',
        'Carrito de compras persistente entre sesiones',
        'Integración segura con Stripe para procesamiento de pagos',
        'Panel de administración para gestión de productos y pedidos',
        'Sistema de reviews y calificaciones de productos',
        'Notificaciones por email automáticas',
        'Diseño responsive optimizado para todos los dispositivos'
      ],
      challenges: 'El mayor desafío fue implementar un sistema de pagos seguro y confiable, además de optimizar las consultas a la base de datos para manejar grandes volúmenes de productos. También fue complejo manejar el estado del carrito entre diferentes sesiones de usuario.',
      learned: 'Aprendí sobre integración de APIs de pago, arquitectura de aplicaciones full-stack escalables, gestión de estado global, optimización de bases de datos NoSQL, y implementación de medidas de seguridad en aplicaciones web comerciales.'
    },
    {
      id: 2,
      name: 'Arcade: Breakout - Parallel Programming',
      description: 'Implementación del clásico juego Breakout con programación paralela, modos individual y multijugador.',
      detailedDescription: 'Una recreación moderna del clásico juego de arcade Breakout desarrollada en C++ con técnicas de programación paralela. El juego incluye tanto modo individual como multijugador en pantalla compartida, utilizando pthreads para manejar múltiples hilos y optimizar el rendimiento del juego.',
      tech: ['C++', 'Pthreads', 'Parallel Programming', 'Game Development', 'Console Interface'],
      github: 'https://github.com/AlejandroJavierGarciaGarcia/2024_Breakout_Parallel_Programming',
      demo: 'https://effortless-choux-7c7dd7.netlify.app/',
      image: '🎮',
      features: [
        'Modo de juego individual contra bloques con IA',
        'Modo multijugador competitivo en la misma pantalla',
        'Velocidad de pelota ajustable para diferentes niveles de dificultad',
        'Programación paralela con pthreads para mejor rendimiento',
        'Interfaz de consola intuitiva y responsiva',
        'Sistema de puntuación y niveles progresivos',
        'Detección de colisiones precisa y fluida',
        'Compatible con sistemas Windows usando funciones nativas'
      ],
      challenges: 'La sincronización de hilos fue el principal desafío, especialmente para manejar la entrada del usuario, el movimiento de la pelota y la actualización de la pantalla simultáneamente sin crear condiciones de carrera. También fue complejo optimizar el rendimiento manteniendo la fluidez del juego.',
      learned: 'Dominé conceptos avanzados de programación paralela y concurrente, manejo de hilos con pthreads, sincronización de recursos compartidos, optimización de rendimiento en aplicaciones de tiempo real, y desarrollo de juegos con C++ a bajo nivel.'
    },
    {
      id: 3,
      name: 'Freelance Frontend Project',
      description: 'Proyecto frontend freelance enfocado en crear una experiencia de usuario moderna y atractiva.',
      detailedDescription: 'Un proyecto frontend desarrollado como trabajo freelance, implementando las mejores prácticas de desarrollo web moderno. El proyecto se centra en crear una interfaz de usuario limpia, responsive y altamente interactiva utilizando tecnologías web de vanguardia.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design'],
      github: 'https://github.com/G1LB3T0/Proyecto_Freelance_FrontEnd',
      demo: 'https://effortless-choux-7c7dd7.netlify.app/',
      image: '💼',
      features: [
        'Diseño responsive optimizado para todos los dispositivos',
        'Interfaz de usuario moderna con animaciones fluidas',
        'Componentes React reutilizables y modulares',
        'Optimización de performance y tiempo de carga',
        'Implementación de mejores prácticas de accesibilidad',
        'Integración con APIs externas para contenido dinámico',
        'Sistema de navegación intuitivo y user-friendly',
        'Código limpio y bien documentado siguiendo estándares de la industria'
      ],
      challenges: 'El principal reto fue cumplir con los requerimientos específicos del cliente mientras mantenía la flexibilidad para futuras expansiones. También fue desafiante optimizar el rendimiento sin comprometer la riqueza visual de la interfaz.',
      learned: 'Mejoré mis habilidades en comunicación con clientes, gestión de proyectos freelance, implementación de feedback iterativo, y desarrollo de soluciones frontend escalables que cumplen con estándares comerciales profesionales.'
    }
  ],
  
  experience: [
    {
      title: 'Desarrollador Full Stack',
      company: 'Freelance/Proyectos Personales',
      period: '2023 - Presente',
      description: 'Desarrollo de aplicaciones multiplataforma combinando tecnología móvil, web y sistemas de bajo nivel para crear soluciones innovadoras.',
      achievements: [
        'Desarrolló 10+ aplicaciones móviles con Jetpack Compose', 
        'Implementó motores de simulación física de alto rendimiento',
        'Creó experiencias web interactivas con más de 95% de satisfacción de usuario',
        'Optimizó algoritmos reduciendo tiempo de procesamiento en 60%'
      ],
      responsibilities: [
        'Desarrollo de aplicaciones móviles nativas con Jetpack Compose y Kotlin',
        'Implementación de algoritmos de simulación física en C',
        'Creación de experiencias web interactivas con HTML5, CSS3 y JavaScript',
        'Optimización de rendimiento en aplicaciones de tiempo real',
        'Investigación y aplicación de nuevas tecnologías y metodologías',
        'Diseño de arquitecturas escalables y mantenibles'
      ]
    },
    {
      title: 'Desarrollador de Simulaciones',
      company: 'Proyectos Académicos/Investigación',
      period: '2022 - 2023',
      description: 'Especialización en desarrollo de simulaciones físicas y computacionales para aplicaciones científicas y educativas.',
      achievements: [
        'Creó 5+ motores de simulación física funcionales', 
        'Implementó algoritmos de integración numérica de alta precisión',
        'Desarrolló herramientas de visualización científica interactivas',
        'Contribuyó a proyectos de investigación en física computacional'
      ],
      responsibilities: [
        'Desarrollo de simulaciones físicas en C y C++',
        'Implementación de algoritmos matemáticos complejos',
        'Optimización de código para aplicaciones de alto rendimiento',
        'Creación de interfaces de usuario para herramientas científicas',
        'Documentación técnica detallada de algoritmos y sistemas',
        'Colaboración en proyectos de investigación multidisciplinarios'
      ]
    },
    {
      title: 'Desarrollador Frontend',
      company: 'Proyectos Web Creativos',
      period: '2021 - 2022',
      description: 'Enfoque en crear experiencias web únicas que combinan diseño innovador con implementación técnica avanzada.',
      achievements: [
        'Desarrolló 15+ proyectos web interactivos únicos',
        'Implementó técnicas avanzadas de animación y rendering web',
        'Creó bibliotecas de componentes reutilizables',
        'Alcanzó métricas de performance superiores a 90 en Lighthouse'
      ],
      responsibilities: [
        'Desarrollo de interfaces web interactivas con tecnologías modernas',
        'Implementación de animaciones complejas con Canvas y WebGL',
        'Optimización de performance y experiencia de usuario',
        'Creación de componentes web reutilizables y escalables',
        'Integración de APIs y servicios web modernos',
        'Implementación de diseño responsive y accesible'
      ]
    }
  ]
};

// Configuración de edificios de la aldea
export const buildingsConfig = [
  {
    id: 'townhall',
    title: 'Sobre Mí',
    level: 13,
    type: 'townhall',
    position: { x: '45%', y: '40%' },
    description: 'Centro de comando de mi carrera como desarrollador',
    hasNewContent: true,
  },
  {
    id: 'laboratory',
    title: 'Habilidades',
    level: 10,
    type: 'laboratory',
    position: { x: '25%', y: '25%' },
    description: 'Donde perfecciono mis habilidades técnicas',
  },
  {
    id: 'barracks',
    title: 'Proyectos',
    level: 12,
    type: 'barracks',
    position: { x: '70%', y: '30%' },
    description: 'Donde entreno mis mejores creaciones',
  },
  {
    id: 'castle',
    title: 'Experiencia',
    level: 8,
    type: 'castle',
    position: { x: '60%', y: '60%' },
    description: 'Fortaleza de mi experiencia profesional',
  },
  {
    id: 'wizardtower',
    title: 'Contacto',
    level: 7,
    type: 'wizardtower',
    position: { x: '30%', y: '65%' },
    description: 'Portal de comunicación interdimensional',
  }
];

// Datos adicionales para personalización
export const customization = {
  colors: {
    primary: '#FFD700', // Oro de Clash
    secondary: '#8B5CF6', // Púrpura
    accent: '#10B981', // Verde
    danger: '#EF4444', // Rojo
  },
  
  social: {
    twitter: 'https://twitter.com/zacatac23', // Actualiza si tienes
    instagram: 'https://instagram.com/zacatac23', // Actualiza si tienes
    youtube: 'https://youtube.com/c/zacatac23', // Actualiza si tienes
  },
  
  settings: {
    showLoadingScreen: true,
    enableAnimations: true,
    showParticleEffects: true,
    autoPlaySounds: false, // Para futura implementación
  }
};
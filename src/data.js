import schoolImage from '../media/optimized/proyecto-escuela.webp';
import habitImage from '../media/optimized/habitflow.webp';
import safirosImage from '../media/optimized/safiros.webp';

export const profile = {
  name: 'Ulises Fernández',
  github: 'https://github.com/UlisesF04',
  linkedin: 'https://www.linkedin.com/in/ulises-fernández-a6620a259/',
};

export const projects = [
  {
    id: 'proyecto-escuela',
    name: 'ProyectoEscuela',
    category: 'full-stack',
    categoryLabel: 'Full-stack application',
    tagline: 'A connected school community.',
    description:
      'One place for school staff to manage attendance, grades, courses, and documents, and for families to follow their children’s progress.',
    image: schoolImage,
    imageAlt:
      'ProyectoEscuela administration dashboard with navigation for users, courses, students, teachers, and school notifications.',
    imageWidth: 2000,
    imageHeight: 1125,
    previewLabel: 'School management dashboard',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Python'],
    repository: 'https://github.com/UlisesF04/ProyectoEscuela',
    featured: true,
    theme: 'school',
    context:
      'A web platform that brings school administration and family communication together. Each person sees the tools and information relevant to their role.',
    features: [
      'Separate workspaces for administrators, school staff, teachers, and families.',
      'Attendance records, grade tracking, and academic progress in one place.',
      'Document management, absence justifications, and internal communication.',
      'Protected sign-in with JWT cookies and a PostgreSQL database.',
    ],
    implementation:
      'React and Chakra UI on the frontend; Node.js, Express, and Sequelize on the backend. Docker runs PostgreSQL locally, with an optional Python service for email notifications.',
  },
  {
    id: 'habitflow',
    name: 'HabitFlow',
    category: 'full-stack',
    categoryLabel: 'Full-stack application',
    tagline: 'Small habits. Visible progress.',
    description:
      'A personal habit tracker that turns daily check-ins into streaks, completion rates, and a clear view of progress. Built to make consistency easier to see.',
    image: habitImage,
    imageAlt:
      'HabitFlow landing page with a warm brown interface, habit-tracking introduction, and calendar preview.',
    imageWidth: 1440,
    imageHeight: 900,
    previewLabel: 'pht-beta.vercel.app',
    technologies: ['React', 'Java', 'Spring Boot', 'MySQL'],
    repository: 'https://github.com/UlisesF04/Personal-Habit-Tracker',
    liveUrl: 'https://pht-beta.vercel.app/',
    theme: 'habits',
    context:
      'A full-stack application for building and following daily routines. Create a habit, check it off each day, and understand your progress through a personal dashboard.',
    features: [
      'Create and manage habits with a name, description, and frequency.',
      'Daily check-ins with automatic current and best streak calculations.',
      'Seven- and thirty-day completion rates and dashboard statistics.',
      'Protected accounts with JWT authentication and hashed passwords.',
    ],
    implementation:
      'React and Tailwind CSS connect to a Java and Spring Boot REST API. MySQL stores habit history. The frontend is hosted on Vercel, the API on Render, and the database on Aiven.',
    note: 'The demo uses free hosting, so the first sign-in request may take a little longer while the API wakes up.',
  },
  {
    id: 'safiros',
    name: 'Safiro’s',
    category: 'frontend',
    categoryLabel: 'Frontend for a real client',
    tagline: 'Local style, online.',
    description:
      'A storefront for a local clothing brand, with Standard and Premium collections and a product catalog the team can update directly from Google Sheets.',
    image: safirosImage,
    imageAlt:
      'Safiro’s clothing storefront with its yellow wordmark on black and a row of clothing campaign photographs.',
    imageWidth: 1440,
    imageHeight: 900,
    previewLabel: 'safiros.netlify.app',
    technologies: ['JavaScript', 'Tailwind CSS', 'Google Sheets'],
    repository: 'https://github.com/UlisesF04/SafirosPage',
    liveUrl: 'https://safiros.netlify.app/',
    theme: 'safiros',
    context:
      'My first project for a real client: a local clothing brand in Argentina. The site gives the brand an online home and lets its team manage products without editing code.',
    features: [
      'A brand-led landing page and two product collections.',
      'Up to three photos per product, with swipe and keyboard navigation.',
      'Product and homepage content managed through Google Sheets.',
      'A responsive layout deployed on Netlify.',
    ],
    implementation:
      'Semantic HTML, Tailwind CSS, and vanilla JavaScript keep the storefront lightweight. Published Google Sheets supply product data, so the client can maintain the catalog with familiar tools.',
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'layout',
    description: 'Clear, responsive interfaces.',
    tools: 'React, JavaScript, HTML, CSS, Tailwind CSS',
  },
  {
    title: 'Backend',
    icon: 'code',
    description: 'The logic behind the experience.',
    tools: 'Node.js, Express, Java, Spring Boot, REST APIs',
  },
  {
    title: 'Data',
    icon: 'database',
    description: 'Organized data, useful insights.',
    tools: 'Python, SQL, PostgreSQL, MySQL',
  },
  {
    title: 'Workflow',
    icon: 'layers',
    description: 'A maintainable way to build.',
    tools: 'Git, GitHub, Docker, modular architecture',
  },
];

const spanishProjects = {
  'proyecto-escuela': {
    categoryLabel: 'Aplicación full-stack',
    tagline: 'Una comunidad escolar conectada.',
    description: 'Un espacio para que el personal escolar gestione asistencias, notas, cursos y documentos, y las familias acompañen el progreso de sus hijos.',
    imageAlt: 'Panel de administración de ProyectoEscuela con acceso a usuarios, cursos, alumnos, docentes y notificaciones escolares.',
    previewLabel: 'Panel de gestión escolar',
    context: 'Una plataforma web que reúne la administración escolar y la comunicación con las familias. Cada persona accede a las herramientas y la información correspondientes a su rol.',
    features: [
      'Espacios para administración, preceptoría, docentes y familias.',
      'Registro de asistencias, calificaciones y evolución académica en un solo lugar.',
      'Gestión de documentos, justificativos de inasistencia y comunicación interna.',
      'Inicio de sesión protegido con cookies JWT y una base de datos PostgreSQL.',
    ],
    implementation: 'React y Chakra UI en el frontend; Node.js, Express y Sequelize en el backend. Docker ejecuta PostgreSQL en el entorno local, con un servicio opcional en Python para notificaciones por correo.',
  },
  habitflow: {
    categoryLabel: 'Aplicación full-stack',
    tagline: 'Pequeños hábitos. Progreso visible.',
    description: 'Un registro de hábitos que transforma las actividades diarias en rachas, porcentajes de cumplimiento y una visión clara del progreso. Pensado para hacer visible la constancia.',
    imageAlt: 'Página de inicio de HabitFlow, con una interfaz en tonos marrones, una introducción al seguimiento de hábitos y un calendario.',
    context: 'Una aplicación full-stack para crear y mantener rutinas diarias. Creá un hábito, registrá su cumplimiento y seguí tu progreso desde un panel personal.',
    features: [
      'Creación y gestión de hábitos con nombre, descripción y frecuencia.',
      'Registro diario con cálculo automático de la racha actual y la mejor racha.',
      'Porcentajes de cumplimiento de siete y treinta días y estadísticas generales.',
      'Cuentas protegidas con autenticación JWT y contraseñas almacenadas mediante hash.',
    ],
    implementation: 'React y Tailwind CSS se conectan a una API REST desarrollada con Java y Spring Boot. MySQL guarda el historial de hábitos. El frontend está alojado en Vercel, la API en Render y la base de datos en Aiven.',
    note: 'La demo usa alojamiento gratuito. El primer inicio de sesión puede tardar un poco más mientras se activa la API.',
  },
  safiros: {
    categoryLabel: 'Frontend para un cliente real',
    tagline: 'Estilo local, presencia online.',
    description: 'Un sitio para una marca local de ropa, con colecciones Standard y Premium y un catálogo de productos que el equipo puede actualizar desde Google Sheets.',
    imageAlt: 'Sitio de Safiro’s con su logo amarillo sobre fondo negro y una fila de fotografías de la marca de ropa.',
    context: 'Mi primer proyecto para un cliente real: una marca de ropa local de Argentina. El sitio le da presencia online y permite que su equipo gestione los productos sin editar código.',
    features: [
      'Una página de presentación de la marca y dos colecciones de productos.',
      'Hasta tres fotos por producto, con navegación táctil y por teclado.',
      'Productos y contenido de la página de inicio administrados desde Google Sheets.',
      'Diseño adaptable a distintos dispositivos y publicado en Netlify.',
    ],
    implementation: 'HTML semántico, Tailwind CSS y JavaScript mantienen el sitio liviano. Las hojas publicadas de Google Sheets proporcionan los datos, para que el cliente mantenga el catálogo con herramientas que ya conoce.',
  },
};

const spanishSkills = {
  layout: { title: 'Frontend', description: 'Interfaces claras y adaptables.' },
  code: {
    title: 'Backend',
    description: 'La lógica detrás de la experiencia.',
    tools: 'Node.js, Express, Java, Spring Boot, APIs REST',
  },
  database: { title: 'Datos', description: 'Datos organizados, información útil.' },
  layers: {
    title: 'Flujo de trabajo',
    description: 'Código fácil de mantener.',
    tools: 'Git, GitHub, Docker, arquitectura modular',
  },
};

export function getProjects(language) {
  return language === 'es'
    ? projects.map((project) => ({ ...project, ...spanishProjects[project.id] }))
    : projects;
}

export function getSkillGroups(language) {
  return language === 'es'
    ? skillGroups.map((group) => ({ ...group, ...spanishSkills[group.icon] }))
    : skillGroups;
}

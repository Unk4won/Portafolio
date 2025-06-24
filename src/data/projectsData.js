// src/data/projectsData.js

/*IMPROTAR IMAGENES DE FORMA DINAMICA*/
// Asegúrate de que los nombres de los archivos en tu carpeta 'projectsImg'
// coincidan exactamente con el 'imageFileName' en minúsculas y la extensión '.jpg'.
const porjectImgModules = import.meta.glob('../assets/projectsImg/*.jpg');

export const projectData = [
  {
    id: "tasknest", // Añadido id para referencia consistente
    title: "TaskNest",
    tech: ["React", "Node.js", "MongoDB", "CSS Modules"],
    shortDescription: "Task manager with login and priority filters.",
    fullDescription:
      "A productivity-focused task manager built with the MERN stack. It supports secure user authentication, task creation, editing, deletion, and priority filtering. Designed with a minimal and clean UI for better usability.",
    features: ["User authentication", "CRUD tasks", "Filter by priority"],
    repo: "#",
    year: 2025,
    imageFileName: "tasknest", // <-- Usamos imageFileName para el nombre del archivo
    imageAlt: "To-Do App screenshot",
    status: "preparation",
    demo: "#", // Se añadió demo para consistencia, puedes cambiarlo o eliminarlo
  },
  {
    id: "devlogix", // Añadido id
    title: "DevLogix",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    shortDescription: "Technical blog with tags and admin tools.",
    fullDescription:
      "A full-featured blogging platform for developers. It includes a robust admin dashboard, support for markdown content, tagging system, and moderated user comments. Built for scalability and content management.",
    features: ["Admin dashboard", "Comment moderation", "Tag-based filtering"],
    repo: "#",
    year: 2025,
    imageFileName: "devlogix",
    imageAlt: "Blog admin screenshot",
    status: "preparation",
    demo: "#",
  },
  {
    id: "beatflow", // Añadido id
    title: "BeatFlow",
    tech: ["Svelte", "MongoDB", "Audio API"],
    shortDescription: "Music player with playlist and upload features.",
    fullDescription:
      "A modern music player inspired by Spotify. Users can create custom playlists, upload their own MP3s, and control playback with custom UI components. Built to practice audio streaming and media control APIs.",
    features: ["MP3 upload", "Playback control", "Custom playlists"],
    repo: "#",
    year: 2025,
    imageFileName: "beatflow",
    imageAlt: "Spotify clone UI",
    status: "preparation",
    demo: "#",
  },
  {
    id: "digimart", // Añadido id
    title: "DigiMart",
    tech: ["Astro", "React", "Firebase", "Stripe"],
    shortDescription: "E-book store with cart and payment integration.",
    fullDescription:
      "A fast and responsive e-commerce site focused on selling digital products like e-books. Includes a shopping cart, product filters, and Stripe integration for secure payments. Built with Astro and React for performance.",
    features: ["Cart system", "Stripe checkout", "Product filters"],
    repo: "#",
    year: 2025,
    imageFileName: "digimart",
    imageAlt: "E-commerce screenshot",
    status: "preparation",
    demo: "#",
  },
  {
    id: "skycast", // Añadido id
    title: "SkyCast",
    tech: ["React", "OpenWeatherMap", "Chart.js"],
    shortDescription: "Forecast with geolocation and temperature charts.",
    fullDescription:
      "A dynamic weather forecast app that detects the user's location and displays real-time data including temperature, humidity, and future predictions using Chart.js. Dark mode support included.",
    features: ["Geolocation", "Dark mode", "Temperature charts"],
    repo: "#",
    year: 2025,
    imageFileName: "skycast",
    imageAlt: "Weather forecast UI",
    status: "preparation",
    demo: "#",
  },
  {
    id: "fintrack", // Añadido id
    title: "FinTrack",
    tech: ["TypeScript", "React", "Victory.js", "PostgreSQL"],
    shortDescription: "Track income and expenses with visual reports.",
    fullDescription:
      "An intuitive tool for tracking income and expenses. Visual dashboards help analyze spending trends over time. Includes features for filtering by category and exporting data as CSV or PDF.",
    features: ["Data visualization", "CSV/PDF export", "Category filters"],
    repo: "#",
    year: 2025,
    imageFileName: "fintrack",
    imageAlt: "Expense dashboard screenshot",
    status: "preparation",
    demo: "#",
  },
  
  {
    id: "instayop", // Añadido id
    title: "InstaYop",
    tech: ["Next.js", "Tailwind CSS", "Firebase"],
    shortDescription: "Photo-sharing app with real-time feed.",
    fullDescription:
      "A simplified Instagram-like photo app. Users can share images, like and comment, and see updates in real-time using Firebase Firestore. Includes authentication and user profiles.",
    features: ["Real-time feed", "Photo upload", "User profiles"],
    repo: "#",
    year: 2025,
    imageFileName: "instayop",
    imageAlt: "Social app interface",
    status: "preparation",
    demo: "#",
  },
  {
    id: "notewave", // Añadido id
    title: "NoteWave",
    tech: ["React", "Tailwind CSS", "Firebase"],
    shortDescription: "Notes app with markdown and autosave.",
    fullDescription:
      "A markdown-based note-taking app where users can write, save, and categorize notes. Includes autosave, dark mode, and Firebase integration for real-time sync and persistence.",
    features: ["Markdown support", "Dark mode", "Real-time sync"],
    repo: "#",
    year: 2025,
    imageFileName: "notewave",
    imageAlt: "Note-taking app screenshot",
    status: "preparation",
    demo: "#",
  },
  {
    id: "chatterbox", // Añadido id
    title: "ChatterBox",
    tech: ["React", "Socket.io", "MongoDB"],
    shortDescription: "Real-time chat app with JWT auth.",
    fullDescription:
      "A lightweight real-time messaging platform built with Socket.io and Node. Supports user authentication, public and private chat rooms, and real-time delivery of messages.",
    features: ["Real-time messaging", "Chat rooms", "JWT login"],
    repo: "#",
    year: 2025,
    imageFileName: "chatterbox",
    imageAlt: "Chat app UI",
    status: "preparation",
    demo: "#",
  },
  {
    id: "quizzymind", // Añadido id
    title: "QuizzyMind",
    tech: ["React", "Zustand", "PostgreSQL"],
    shortDescription: "Quiz app with categories and scoring.",
    fullDescription:
      "A quiz web app where users can answer categorized questions, track scores, and compete with others. Built with Zustand for state management and PostgreSQL for question storage.",
    features: ["Timed questions", "Scoring system", "Category filters"],
    repo: "#",
    year: 2025,
    imageFileName: "quizzymind",
    imageAlt: "Quiz UI screenshot",
    status: "preparation",
    demo: "#",
  },
  {
    id: "budgeteer", // Añadido id
    title: "Budgeteer",
    tech: ["React", "Victory.js", "PostgreSQL"],
    shortDescription: "Finance dashboard with CSV import and charts.",
    fullDescription:
      "A personal finance tool that allows users to track income and expenses with category filters. Features include visual dashboards, CSV import, and monthly summaries.",
    features: ["Finance charts", "CSV import", "Monthly reports"],
    repo: "#",
    year: 2025,
    imageFileName: "budgeteer",
    imageAlt: "Finance tool dashboard",
    status: "preparation",
    demo: "#",
  },
];

export { porjectImgModules }; // Exporta el objeto de módulos de imagen
export default projectData;
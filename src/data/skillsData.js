import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma,
  FaNpm, FaDocker,FaCode
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress, SiPostgresql, SiTypescript,
  SiRedux, SiFirebase, SiVite, SiGraphql, SiJest, SiCypress, SiPrisma,
  SiNotion, SiSlack
} from "react-icons/si";

export const skillsData = [
  {
    category: "Frontend",
    description: "Technologies I use to craft responsive and engaging user interfaces.",
    technologies: [
      { name: "HTML", icon: FaHtml5, color: "#E44D26", rating: 5 },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6", rating: 5 },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E", rating: 5 },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", rating: 4 },
      { name: "React", icon: FaReact, color: "#61DAFB", rating: 5 },
      { name: "Redux", icon: SiRedux, color: "#764ABC", rating: 4 },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4", rating: 5 },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000", rating: 4 },
      { name: "Vite", icon: SiVite, color: "#646CFF", rating: 4 },
    ],
  },
  {
    category: "Backend",
    description: "Technologies I use for server-side logic and database management.",
    technologies: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933", rating: 5 },
      { name: "Express", icon: SiExpress, color: "#000000", rating: 4 },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", rating: 4 },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", rating: 4 },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28", rating: 3 },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098", rating: 3 },
      { name: "Prisma", icon: SiPrisma, color: "#0C344B", rating: 3 },
    ],
  },
  {
    category: "Tools",
    description: "Key tools that boost my productivity and collaboration.",
    technologies: [
      { name: "Git", icon: FaGitAlt, color: "#F05032", rating: 5 },
      { name: "GitHub", icon: FaGithub, color: "#181717", rating: 5 },
      { name: "NPM", icon: FaNpm, color: "#CB3837", rating: 4 },
      { name: "Docker", icon: FaDocker, color: "#2496ED", rating: 3 },
      { name: "Jest", icon: SiJest, color: "#C21325", rating: 3 },
      { name: "Cypress", icon: SiCypress, color: "#17202C", rating: 2 },
      { name: "VS Code", icon: FaCode, color: "#007ACC", rating: 5 },
      { name: "Figma", icon: FaFigma, color: "#F24E1E", rating: 4 },
      { name: "Notion", icon: SiNotion, color: "#000000", rating: 4 },
      { name: "Slack", icon: SiSlack, color: "#4A154B", rating: 3 },
    ],
  },
];

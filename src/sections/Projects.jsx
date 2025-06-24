import  { useState } from "react";
import WaveDivider from "../components/ui/WaveDivider";
import SectionWrapper from "../components/layout/SectionWrapper";
import ProjectCard from "../components/ui/ProjectCard";
import ProjectModal from "../components/ui/ProjectModal";
import projectData from "../data/projectsData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

const prevSectionColor = "white";
const currentSectionColor = "black"

return (
    <SectionWrapper id="projects" colorSection="bg-white">
      <div className="absolute bottom-0 left-0 z-10 w-full">
      <WaveDivider  from={prevSectionColor} to={currentSectionColor} />
      </div>

        {/* Título de la sección */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-emerald-400">
            Projects
          </h2>
          <p className="mt-5 font-light text-gray-600">
            Click on a project to explore its details.
          </p>
        </div>

        {/* Grid de tarjetas de proyectos */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => (
            <ProjectCard
              key={project.title} // Usa un ID único si lo tienes disponible
              project={project}
              onClick={() => openModal(project)}
            />
          ))}
        </div>

        {/* Modal de detalles */}
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={closeModal}
          project={selectedProject}
        />
  
    </SectionWrapper>
  );
};

export default Projects;

import { skillsData } from "../data/skillsData";
import SkillCategorySection from "../components/ui/SkillCategorySection";
import SectionWrapper from "../components/layout/SectionWrapper";
import WaveDivider from "../components/ui/WaveDivider";
/**
 * Componente principal de la sección "Skills".
 * Muestra un título general y un listado de categorías,
 * renderizadas dinámicamente desde `skillsData`.
 */
const Skills = () => {
  const prevSectionColor = "black";
const currentSectionColor = "white"

  return (
    // Contenedor semántico accesible con fondo adaptable claro/oscuro
    <SectionWrapper
      id="skills"
      colorSection="bg-white dark:bg-black"
      role="region"
      aria-labelledby="skills-main-heading"
    >


      <div className="absolute bottom-0 left-0 z-10 w-full">
      <WaveDivider  from={prevSectionColor} to={currentSectionColor} />
      </div>
      {/* Encabezado principal */}
      <div className="text-center mb-14">
        <h2
          id="skills-main-heading"
          className="mb-2 text-2xl font-bold sm:text-3xl md:text-6xl text-emerald-400"
        >
          Skills
        </h2>
        <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-400">
          These are the technologies and tools I use to build modern fullstack web apps.
        </p>
      </div>

      {/* Listado de categorías */}
      <div className="space-y-16">
        {skillsData.map((category) => (
          <div key={category.category}>
            <SkillCategorySection
              category={category.category}
              description={category.description}
              technologies={category.technologies}
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;

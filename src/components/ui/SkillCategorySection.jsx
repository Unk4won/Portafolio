import { LuStar } from "react-icons/lu";

/**
 * Componente de categoría de habilidades.
 * Muestra el nombre, descripción y una grilla de tecnologías
 * asociadas con íconos y estrellas de valoración.
 */
const SkillCategorySection = ({ category, description, technologies }) => {
  return (
    // Cada categoría es una sección semántica con su propio título accesible
    <section
      className="mb-14"
      aria-labelledby={`${category.toLowerCase().replace(/\s/g, "-")}-heading`}
    >
      {/* Título de la categoría */}
      <div>
        <h2
          id={`${category.toLowerCase().replace(/\s/g, "-")}-heading`}
          className="mb-1 text-xl font-bold sm:text-2xl md:text-3xl text-emerald-500"
        >
          {category}
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">{description}</p>
      </div>

      {/* Tecnologías (grilla responsiva) */}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {technologies.map((tech) => {
          const Icon = tech.icon;

          return (
            <div
              key={tech.name}
              className="relative flex flex-col items-center justify-center p-4 transition-all duration-300 border shadow-sm group bg-white/30 dark:bg-white/5 backdrop-blur-md rounded-xl hover:shadow-lg hover:scale-105"
              title={tech.name}
            >
              {/* Ícono principal */}
              <div className="mb-3 text-5xl" style={{ color: tech.color }}>
                {Icon && <Icon aria-hidden="true" />}
              </div>

              {/* Nombre de la tecnología */}
              <p className="mb-2 text-lg font-semibold text-center text-white">
                {tech.name}
              </p>

              {/* Rating con estrellas */}
              <div
                className="flex gap-0.5"
                aria-label={`Rating: ${tech.rating} out of 5 stars`}
              >
                {[...Array(5)].map((_, i) => (
                  <div key={i}>
                    <LuStar
                      size={14}
                      className={`${
                        i < tech.rating
                          ? "fill-yellow-300 text-yellow-300"
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillCategorySection;

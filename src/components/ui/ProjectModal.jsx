import { useEffect, useState } from "react"; // Importa useState
import { LuX } from "react-icons/lu";
import IconButton from "./IconButton"
import { porjectImgModules } from "../../data/projectsData";
import { LuGithub, LuCode } from "react-icons/lu";

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loadingImage, setLoadingImage] = useState(true);

  // Evita el scroll en el <body> cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Cargar la imagen del modal cuando se abre
      if (project && project.imageFileName) {
        setLoadingImage(true);
        const loadImage = async () => {
          // Construye la ruta completa esperada por import.meta.glob
          const path = `../assets/projectsImg/${project.imageFileName}.jpg`;
          const importFunction = porjectImgModules[path]; // Asegúrate que el nombre sea 'porjectImgModules'

          if (importFunction) {
            try {
              const module = await importFunction();
              setImageUrl(module.default);
            } catch (error) {
              console.error(`Error loading modal image for ${project.imageFileName}:`, error);
              setImageUrl(null); // Fallback if image fails to load
            } finally {
              setLoadingImage(false);
            }
          } else {
            console.warn(`Import function not found for modal image: ${path}`);
            setImageUrl(null); // No image found or path incorrect
            setLoadingImage(false);
          }
        };
        loadImage();
      } else {
        setImageUrl(null);
        setLoadingImage(false);
      }
    } else {
      document.body.style.overflow = "unset"; // Restaura el scroll del body
      setImageUrl(null); // Limpiar la imagen cuando el modal se cierra
      setLoadingImage(true); // Reiniciar el estado de carga
    }
    return () => {
      document.body.style.overflow = "unset"; // Limpieza segura al desmontar
    };
  }, [isOpen, project]); // Dependencia en project para recargar si el proyecto cambia


  // Si el modal no está abierto o no hay datos, no renderiza nada
  if (!isOpen || !project) return null;

  const {
    title,
    // Eliminado 'image' directo, ahora usamos imageFileName
    imageAlt,
    fullDescription,
    features,
    tech,
    repo,
    demo,
    year,
    status,
  } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 overflow-y-auto bg-black/50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      aria-describedby="project-modal-description"
    >
      {/* Contenedor del modal */}
      <div
        className="relative bg-white dark:bg-zinc-900 text-black dark:text-white rounded-2xl w-full max-w-5xl shadow-xl flex flex-col md:flex-row max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Evita cerrar el modal desde el interior
      >
        {/* Botón de cerrar */}
        <button
          className="absolute z-10 p-2 transition rounded-full top-4 right-4 text-emerald-500 hover:text-emerald-400 bg-white/20 dark:bg-zinc-800/50"
          onClick={onClose}
          aria-label={`Close project modal for ${title}`}
        >
          <LuX size={24} />
        </button>

        {/* Imagen del proyecto o placeholder de carga */}
        <div className="w-full md:w-1/2">
          {loadingImage ? (
            <div className="flex items-center justify-center w-full h-64 text-gray-500 bg-gray-200 md:h-full dark:bg-gray-700 dark:text-gray-400">
              Loading Image...
            </div>
          ) : (
            imageUrl ? (
              <img
                src={imageUrl} // Usa la URL cargada dinámicamente
                alt={imageAlt}
                className="object-cover w-full h-64 md:h-full rounded-tl-2xl md:rounded-bl-2xl md:rounded-tr-none rounded-tr-2xl"
                loading="eager" // Para el modal, es probable que quieras que cargue de inmediato
                width="800"
                height="450"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-64 text-red-700 bg-red-100 md:h-full dark:bg-red-900 dark:text-red-300">
                Error Loading Image
              </div>
            )
          )}
        </div>

        {/* Contenido textual */}
        <div
          className="flex flex-col w-full p-6 overflow-y-auto md:w-1/2"
          id="project-modal-description"
        >
          <h2 id="project-modal-title" className="mb-1 text-2xl font-bold text-emerald-500">
            {title}
          </h2>

          <span className="mb-4 text-sm text-gray-500 dark:text-gray-400">
            {year} — <span className="capitalize">{status}</span>
          </span>

          <p className="mb-4 text-sm">{fullDescription}</p>

          <div className="mb-4">
            <h3 className="mb-1 font-semibold text-md">Key Features:</h3>
            <ul className="space-y-1 text-sm list-disc list-inside">
              {features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="mb-1 font-semibold text-md">Technologies Used:</h3>
            <div className="flex flex-wrap gap-2">
              {tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs transition-colors duration-200 rounded-full cursor-pointer bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100 hover:bg-emerald-200 dark:hover:bg-emerald-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Botones de enlaces externos */}
          <div className="flex gap-3 pt-4 mt-auto border-t border-gray-200 dark:border-zinc-700">
            {repo && (

                <IconButton to={repo} text="Repository" icon={LuGithub}/>
            )}
            {demo && (
              <IconButton to={demo} text="Live Demo" icon={LuCode}/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
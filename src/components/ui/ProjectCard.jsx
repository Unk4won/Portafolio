// src/components/ui/ProjectCard.jsx
import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaClock, FaExclamationCircle } from "react-icons/fa";
import Button from "./Button";
import { porjectImgModules } from "../../data/projectsData";

const ProjectCard = ({ project, onClick }) => {
  const { title, imageFileName, imageAlt, shortDescription, tech, status } = project;
  const [imageUrl, setImageUrl] = useState(null);
  const [loadingImage, setLoadingImage] = useState(true);

  useEffect(() => {
    setLoadingImage(true);
    const loadImage = async () => {
      const path = `../assets/projectsImg/${imageFileName}.jpg`;

      const importFunction = porjectImgModules[path];

      if (importFunction) {
        try {
          const module = await importFunction();
          setImageUrl(module.default);
        } catch (error) {
          console.error(`Error loading image for ${imageFileName}:`, error);
          setImageUrl(null);
        } finally {
          setLoadingImage(false);
        }
      } else {
        console.warn(`Import function not found for image: ${path}`);
        setImageUrl(null);
        setLoadingImage(false);
      }
    };
    loadImage();
  }, [imageFileName]);

  const statusConfig = {
    finished: {
      className: "bg-green-500/40 text-white font-light text-lg",
      icon: <FaCheckCircle size={16} aria-hidden="true" />,
    },
    "in progress": {
      className: "bg-yellow-400/40 text-white font-light text-lg",
      icon: <FaClock size={16} aria-hidden="true" />,
    },
    preparation: {
      className: "bg-gray-400/40 text-white font-light text-lg",
      icon: <FaExclamationCircle size={16} aria-hidden="true" />,
    },
    default: {
      className: "bg-gray-400/40 text-white font-light text-lg",
      icon: <FaExclamationCircle size={16} aria-hidden="true" />,
    },
  };

  const { className, icon } = statusConfig[status] || statusConfig.default;

  return (
    <article
      className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer group  bg-white transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98]"
      onClick={onClick}
      role="button"
      tabIndex="0"
      aria-label={`Open project modal for ${title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Imagen del proyecto o placeholder de carga */}
      {loadingImage ? (
        <div className="flex items-center justify-center w-full h-56 text-gray-500 bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          Loading Image...
        </div>
      ) : (
        imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt}
            loading="lazy"
            width="400"
            height="224"
            className="object-cover w-full h-56 transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-56 text-red-700 bg-red-100 dark:bg-red-900 dark:text-red-300">
            Error Loading Image
          </div>
        )
      )}

      {/* Título (visible por defecto, oculto al hacer hover) */}
      <div className="absolute bottom-0 left-0 right-0 w-full py-2 text-center transition-opacity duration-300 bg-black opacity-100 text-emerald-400 group-hover:opacity-0">
        <h3 className="text-lg font-medium uppercase ">{title}</h3>
      </div>

      {/* Etiqueta de estado del proyecto */}
      <div
        className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold shadow-md backdrop-blur-md flex items-center gap-1 opacity-100 transition-opacity duration-300 ${className}`}
      >
        {icon}
        <span className="capitalize">{status}</span>
      </div>

      {/* Overlay al hacer hover */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center transition-opacity duration-300 ease-in-out opacity-0 bg-black/80 group-hover:opacity-100">
        <h3 className="mb-2 text-lg font-semibold uppercase text-emerald-400">
          {title}
        </h3>
        <p className="mb-3 text-sm text-white">{shortDescription}</p>

        {/* Tecnologías utilizadas */}
        <div
          className="flex flex-wrap justify-around mb-4 text-xs text-white gap-y-2 md:text-sm"
          aria-label="Technologies used"
        >
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 mr-2 border rounded-full bg-emerald-600 border-emerald-700"
            >
              {item}
            </span>
          ))}
          {/* ¡AQUÍ YA NO ESTÁ EL H3 DE "Click for see more"! */}
        </div>

        {/* ¡NUEVA UBICACIÓN DEL H3 "Click for see more"! */}
        <h3 className="py-3 text-lg font-light text-emerald-400 ">Click for see more</h3>

      </div>
    </article>
  );
};

export default ProjectCard;
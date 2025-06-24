// src/components/ui/Button.jsx
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Button = ({ text = "Button", to = "#", variant = "primary", onClick, target, rel }) => {
  // Estilos base comunes a ambos botones
  const baseStyles =
    // Mantén overflow-hidden para que el efecto se recorte dentro del botón
    "relative font-medium text-sm md:text-lg tracking-wide rounded-[1em] cursor-pointer overflow-hidden transition-all duration-200 group inline-flex items-center justify-center";
    // Ajustado a 'inline-flex items-center justify-center'

  // Variantes de diseño
  const variants = {
    primary: `
      ${baseStyles} bg-gradient-to-r from-emerald-500 to-emerald-700 text-white
      // REMOVED active:scale-95 - Consider active:bg-opacity-90 or active:brightness-90 for mobile feedback
    `,
    secondary: `
      ${baseStyles} border border-emerald-500 text-emerald-600 hover:bg-emerald-50
      `
  };

  const combinedClasses = variants[variant];

  // Lógica para determinar el tipo de enlace/botón
  const isExternalLink = to && (to.startsWith('http://') || to.startsWith('https://') || to.startsWith('mailto:'));
  const isInternalSectionLink = to && to.startsWith('#');
  const isPlainButton = !to || to === '#';

  // Contenido interno del botón (sin padding aquí)
  const buttonContent = (
    <span className="relative z-10 flex items-center">
      {text}
    </span>
  );

  // Efecto decorativo (solo para variante 'primary')
  // Ajustado para que se recorte correctamente con overflow-hidden
  const overlayEffect = variant === "primary" && (
    <span className="absolute inset-0 bg-black transform -skew-x-14 transition-transform duration-[400ms] ease-[cubic-bezier(0.3,1,0.8,1)] z-0 -translate-x-full group-hover:translate-x-0" />
  );

  // Renderizado condicional
  if (isExternalLink) {
    return (
      <a
        href={to}
        // Aplicar padding aquí, en el elemento raíz del botón
        className={`${combinedClasses} px-5 py-3`}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        aria-label={text}
        onClick={(e) => { // Añadido e.currentTarget.blur() para enlaces
          if (e.currentTarget) {
            e.currentTarget.blur();
          }
          if (onClick) onClick(e);
        }}
      >
        {buttonContent}
        {overlayEffect}
      </a>
    );
  } else if (isInternalSectionLink) {
    return (
      <ScrollLink
        to={to.substring(1)} // Quitar el '#' del ID
        spy={true}
        smooth={true}
        offset={-70} // Ajusta tu offset del navbar aquí
        duration={500}
        className={`${combinedClasses} px-5 py-3`}
        aria-label={text}
        onClick={(e) => { // Añadido e.currentTarget.blur() para ScrollLink
          if (e.currentTarget) {
            e.currentTarget.blur();
          }
          if (onClick) onClick(e);
        }}
      >
        {buttonContent}
        {overlayEffect}
      </ScrollLink>
    );
  } else { // Es un botón sin navegación real, o con to="#" placeholder
    return (
      <button
        type="button" // ESENCIAL: Asegura que es un botón, no un submit
        // Aplicar padding aquí
        className={`${combinedClasses} px-5 py-3`}
        aria-label={text}
        onClick={(e) => {
          if (e.currentTarget) {
            e.currentTarget.blur();
          }
          if (onClick) onClick(e);
        }}
      >
        {buttonContent}
        {overlayEffect}
      </button>
    );
  }
};

export default Button;
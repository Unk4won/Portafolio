import { Link as ScrollLink } from "react-scroll";

const Button = ({
  text = "Button",
  to = "#",
  variant = "primary",
  onClick,
  target,
  rel,
}) => {
  // Estilos base comunes
  const baseStyles =
    "relative font-medium text-sm md:text-lg tracking-wide rounded-[1em] cursor-pointer overflow-hidden transition-all duration-200 group inline-flex items-center justify-center";

  // Variantes
  const variants = {
    primary: `
      ${baseStyles} bg-gradient-to-r from-emerald-500 to-emerald-700 text-white
    `,
    secondary: `
      ${baseStyles} border border-emerald-500 text-emerald-600 hover:bg-emerald-50
    `,
  };

  const isExternalLink =
    to && (to.startsWith("http://") || to.startsWith("https://") || to.startsWith("mailto:"));
  const isInternalSectionLink = to && to.startsWith("#");
  const isDisabled = !to || to === "#";

  // Combinar clases
  const combinedClasses = `${variants[variant]} ${
    isDisabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
  }`;

  const buttonContent = (
    <span className="relative z-10 flex items-center">{text}</span>
  );

  const overlayEffect =
    variant === "primary" ? (
      <span className="absolute inset-0 bg-black transform -skew-x-14 transition-transform duration-[400ms] ease-[cubic-bezier(0.3,1,0.8,1)] z-0 -translate-x-full group-hover:translate-x-0" />
    ) : null;

  // Enlace externo
  if (isExternalLink) {
    return (
      <a
        href={to}
        className={`${combinedClasses} px-5 py-3`}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        aria-label={text}
        onClick={(e) => {
          if (e.currentTarget) e.currentTarget.blur();
          if (onClick) onClick(e);
        }}
      >
        {buttonContent}
        {overlayEffect}
      </a>
    );
  }

  // Scroll interno
  if (isInternalSectionLink && !isDisabled) {
    return (
      <ScrollLink
        to={to.substring(1)}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={`${combinedClasses} px-5 py-3`}
        aria-label={text}
        onClick={(e) => {
          if (e.currentTarget) e.currentTarget.blur();
          if (onClick) onClick(e);
        }}
      >
        {buttonContent}
        {overlayEffect}
      </ScrollLink>
    );
  }

  // Botón sin navegación o deshabilitado
  return (
    <button
      type="button"
      disabled={isDisabled}
      className={`${combinedClasses} px-5 py-3`}
      aria-label={text}
      onClick={(e) => {
        if (isDisabled) return;
        if (e.currentTarget) e.currentTarget.blur();
        if (onClick) onClick(e);
      }}
    >
      {buttonContent}
      {overlayEffect}
    </button>
  );
};

export default Button;

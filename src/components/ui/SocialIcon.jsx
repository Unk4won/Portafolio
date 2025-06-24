
const SocialIcon = ({ Icon, href, label }) => { // Añadimos 'label' para accesibilidad
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      // Añadir aria-label para describir el enlace para lectores de pantalla
      aria-label={`Enlace a mi perfil de ${label}`}
      className="flex items-center justify-center w-10 h-10 text-xl text-white transition-all duration-300 border rounded-full bg-black/60 border-emerald-400 hover:bg-emerald-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75"
    >
      {/* El icono ya tiene las transiciones. No necesitamos group-hover aquí si el hover está en el 'a' */}
      <Icon />
      <span className="sr-only">{label}</span> {/* Texto oculto para accesibilidad */}
    </a>
  );
};

export default SocialIcon;
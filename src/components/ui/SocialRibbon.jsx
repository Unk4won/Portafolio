
import { personalData } from '../../data/personalData'; // Asegúrate de que la ruta sea correcta
import SocialIcon from './SocialIcon'; // Asegúrate de que la ruta sea correcta

const SocialRibbon = () => {
  return (
    <div
      className="flex flex-wrap justify-between w-full gap-4 px-6 py-4 mt-6 border shadow-lg rounded-xl bg-white/5 backdrop-blur-md border-white/10 md:justify-normal md:w-[272px]"
      role="group" // Semántico para agrupar elementos relacionados
      aria-label="Enlaces a perfiles sociales" // Descripción para el grupo de iconos
    >
      {personalData.Social.map(({ href, icon: Icon, name }, index) => ( // Añadimos 'name' aquí
        <div
          key={index}
          // Eliminamos las animaciones de Framer Motion
          className="text-white"
        >
          {/* Pasamos 'name' a SocialIcon para usarlo en aria-label y sr-only */}
          <SocialIcon Icon={Icon} href={href} label={name} />
        </div>
      ))}
    </div>
  );
};

export default SocialRibbon;
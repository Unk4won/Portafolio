// src/components/ui/ContactServices.jsx
import { FaLaptopCode, FaCloud, FaPlug } from "react-icons/fa";

/**
 * ContactServices
 * Muestra los servicios ofrecidos con íconos de react-icons.
 * Diseño responsivo, soporte para dark mode y animaciones suaves al hacer hover.
 */
const ContactServices = () => {
  // Lista de servicios que se van a mostrar
  const services = [
    {
      icon: (
        <FaLaptopCode
          className="text-emerald-500"
          size={32}
          aria-hidden="true"
        />
      ),
      title: "Web Development",
      description: "Modern, responsive, and optimized applications.",
    },
    {
      icon: (
        <FaPlug
          className="text-emerald-500"
          size={32}
          aria-hidden="true"
        />
      ),
      title: "API Integration",
      description: "Connect your systems with REST or GraphQL services.",
    },
    {
      icon: (
        <FaCloud
          className="text-emerald-500"
          size={32}
          aria-hidden="true"
        />
      ),
      title: "Deployment & DevOps",
      description: "Cloud automation and deployment (Vercel, Netlify, etc.).",
    },
  ];

  return (
    <div
      className="grid grid-cols-1 gap-6 lg:gap-12 w-full"
      aria-label="Services offered"
      role="list"
    >
      {services.map(({ icon, title, description }, index) => (
        <div
          key={index}
          role="listitem"
          className="flex flex-col items-start gap-2 p-4 bg-[#0D0D0D] rounded-xl shadow-sm transition-all duration-300 border border-white/10 backdrop-blur-sm hover:shadow-lg hover:scale-[1.02]"
        >
          {/* Icono representativo del servicio */}
          {icon}

          {/* Título del servicio */}
          <h4 className="text-base lg:text-lg font-bold uppercase text-emerald-600 dark:text-emerald-400">
            {title}
          </h4>

          {/* Descripción breve del servicio */}
          <p className="text-sm md:text-base text-gray-400">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContactServices;

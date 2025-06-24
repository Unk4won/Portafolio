// src/components/ui/PersonalInfo.jsx
import { personalData } from "../../data/personalData";

/**
 * Componente PersonalInfo.
 * Muestra la información de contacto personal del usuario.
 * Admite clases de columnas responsivas personalizables a través de la prop `columnsClass`.
 *
 * @param {Object} props
 * @param {string} [props.columnsClass="grid-cols-1 md:grid-cols-2"] - Clases de Tailwind para el grid responsive.
 */
const PersonalInfo = ({ columnsClass = "grid-cols-1 md:grid-cols-2" }) => {
  return (
    <div
      className={`grid ${columnsClass} gap-4 w-full`}
      role="group"
      aria-label="Información de Contacto Personal"
    >
      {personalData.identification.map(({ label, value, icon: Icon }, index) => {
        const isEmail = label.toLowerCase() === "email";
        const isPhone = ["phone", "teléfono"].includes(label.toLowerCase());

        return (
          <div
            key={index}
            className="flex items-center gap-4 p-4 border border-white/10 bg-[#0D0D0D] rounded-lg shadow-sm"
          >
            {Icon && (
              <Icon
                className="flex-shrink-0 text-emerald-400"
                size={24}
                aria-hidden="true"
              />
            )}
            <div>
              <p className="text-xs uppercase text-white/60 mb-0.5">{label}</p>
              {isEmail ? (
                <a
                  href={`mailto:${value}`}
                  className="text-base text-white break-all hover:underline"
                  aria-label={`Enviar correo a ${value}`}
                >
                  {value}
                </a>
              ) : isPhone ? (
                <a
                  href={`tel:${value.replace(/\s/g, "")}`}
                  className="text-base text-white hover:underline"
                  aria-label={`Llamar a ${value}`}
                >
                  {value}
                </a>
              ) : (
                <p className="text-base text-white">{value}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PersonalInfo;

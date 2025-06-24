import { Link as ScrollLink } from 'react-scroll';

/**
 * IconButton
 * Renders a button/adaptive link with optional icon.
 * - Soporta enlaces externos (href), anclas internas y botones normales.
 * - Variedades visuales: primary, secondary, tech-tag.
 * - Evita efectos hover pegajosos en dispositivos táctiles.
 */
const IconButton = ({
  text = "Button",
  icon: Icon,
  to = "#",
  variant = "primary",
  onClick,
  target,
  rel
}) => {
  const base = "relative font-medium text-sm md:text-lg tracking-wide rounded-[0.8em] cursor-pointer overflow-hidden transition-all duration-200 group flex items-center justify-center";
  const iconClass = "w-5 h-5 mr-2";

  const styles = {
    primary: `${base} bg-gradient-to-r from-emerald-500 to-emerald-700 text-white active:opacity-90`,
    secondary: `${base} border border-emerald-500 text-emerald-600 hover:bg-emerald-50 active:bg-emerald-100`,
  };

  const isExternal = /^https?:\/\//.test(to) || to.startsWith('mailto:');
  const isAnchor = to.startsWith('#');
  const content = (
    <>
      <span className="relative z-10 flex items-center">
        {Icon && <span className={iconClass}><Icon /></span>}
        {text}
      </span>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-black transform -skew-x-14 transition-transform duration-[400ms] ease-[cubic-bezier(0.3,1,0.8,1)] z-0 -translate-x-full md:group-hover:translate-x-0" />
      )}
    </>
  );

  const commonProps = {
    className: `${styles[variant]} px-5 py-3`,
    'aria-label': text,
    onClick: e => {
      e.currentTarget.blur();
      onClick?.(e);
    },

  };

  if (isExternal) {
    return <a href={to} target={target || "_blank"} rel={rel || "noopener noreferrer"} {...commonProps}>{content}</a>;
  }

  if (isAnchor) {
    return (
      <ScrollLink to={to.slice(1)} spy smooth offset={-70} duration={500} {...commonProps}>
        {content}
      </ScrollLink>
    );
  }

  return <button type="button" {...commonProps}>{content}</button>;
};

export default IconButton;

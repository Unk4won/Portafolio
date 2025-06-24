// src/components/SectionWrapper.jsx

const SectionWrapper = ({ id, children, colorSection, className = "" }) => {
  return (
    <section
      id={id}
      className={`
        relative
        w-full min-h-screen
        ${colorSection}
        py-20 px-6 md:px-12
        mx-auto
        ${className}
      `}
    >
      {children}
    </section>
  );
};
export default SectionWrapper;
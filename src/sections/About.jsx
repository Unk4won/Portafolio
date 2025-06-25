import WaveDivider from "../components/ui/WaveDivider";
import SectionWrapper from "../components/layout/SectionWrapper";
import SocialIcons from "../components/ui/SocialRibbon";
import PersonalInfo from "../components/ui/PersonalInfo";
import Button from "../components/ui/Button";
import AboutImg from "../assets/avatar.svg";

const About = () => {
const prevSectionColor = "black";
const currentSectionColor = "white"
  return (
    <SectionWrapper
      id="about"
      colorSection="bg-black"
      className="flex flex-col items-center justify-between gap-10 py-16 text-white lg:flex-row md:py-24 lg:py-32"

    >
  

      {/* Contenido de texto descriptivo */}
      {/* Aquí ya no hay clases de animación condicionales ni 'ref' */}
      <div
        className={`flex-1 space-y-6`}
      >
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-emerald-400">
          About Me
        </h2>

        <p className="max-w-xl text-lg leading-relaxed md:text-xl">
          Hi! I'm <strong className="text-emerald-500">Adriel Flores</strong>, a junior
          fullstack developer focused on crafting fast, modern, and responsive
          digital experiences.
        </p>

        <p className="max-w-xl text-lg leading-relaxed md:text-xl">
          I specialize in technologies like{" "}
          <strong className="text-emerald-600">
            React, Tailwind CSS, Node.js,
          </strong>{" "}
          and <strong className="text-emerald-600">MongoDB</strong>. I enjoy
          writing clean code and building intuitive user interfaces.
        </p>

        <p className="max-w-xl text-lg leading-relaxed md:text-xl">
          I value <strong className="text-emerald-600">consistency</strong>,{" "}
          <strong className="text-emerald-600">curiosity</strong>, and{" "}
          <strong className="text-emerald-600">responsibility</strong>, always
          embracing a mindset of continuous improvement.
        </p>

        <blockquote className="pl-4 text-sm italic border-l-4 text-white/70 border-emerald-400">
          “Stay hungry, stay curious.” – A personal motto that guides my
          journey.
        </blockquote>

        {/* Botones de acción (ver CV y proyectos) */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Button
            variant="primary"
            to="#"
            rel="noopener noreferrer"
            text="View CV"
          />
          <Button variant="primary" to="#projects" text="See Projects"  rel="noopener noreferrer"/>
        </div>

        {/* Elementos reutilizables con información personal y redes */}
        <div>
          <SocialIcons />
        </div>

        <div className="w-full">
          <PersonalInfo />
        </div>
      </div>

      {/* Imagen representativa o avatar */}
      {/* Aquí ya no hay clases de animación condicionales ni 'ref' */}
      <div
        className={`flex justify-center flex-1`}
      >
        <img
          src={AboutImg}
          alt="Adriel illustration - fullstack developer"
          className="object-contain p-5 w-64 bg-white rounded-full shadow-lg shadow-emerald-500 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px]"
          loading="lazy"
        />
      </div>
        
      <div className="absolute bottom-0 left-0 z-10 w-full">
      <WaveDivider  from={prevSectionColor} to={currentSectionColor} />
      </div>
    </SectionWrapper>
  );
};

export default About;
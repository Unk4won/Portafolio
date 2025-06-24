import SectionWrapper from "../components/layout/SectionWrapper";
import WaveDivider from "../components/ui/WaveDivider";
import Button from "../components/ui/Button";
import Avatar from "../assets/avatar.svg";

const Home = () => {

const prevSectionColor = "white";
const currentSectionColor = "black"

  return (
    <SectionWrapper
      id="home"
      colorSection="bg-white" // Sección con fondo blanco (consistente con la identidad visual)
      className="flex flex-col items-center justify-between py-12 md:flex-row-reverse md:py-20 lg:py-24"
    
    >

      <div className="absolute bottom-0 left-0 z-10 w-full">
      <WaveDivider  from={prevSectionColor} to={currentSectionColor} />
      </div>

      {/* Imagen de perfil principal */}
      <div className="flex justify-center w-full mb-10 md:w-1/2 md:mb-0">
        <img
          loading="lazy" // Prioridad de carga (mejora LCP en performance)
          src={Avatar}
          alt="Adriel's avatar - fullstack developer" // Descripción accesible y amigable para SEO
          className="object-contain p-5 w-64 bg-white rounded-full shadow-lg md:w-80 md:h-80 lg:w-[500px] lg:h-[500px]" // Tamaño y estilo responsivo

        />
      </div>


      {/* Contenido textual (nombre, título, descripción, botones) */}
      <div className="w-full space-y-4 text-center md:w-1/2 md:text-left">
        <h1 className="text-4xl font-bold leading-tight text-black sm:text-5xl md:text-6xl">
          Hi! I'm <span className="text-emerald-500">Adriel</span>
        </h1>

        <h2 className="mt-2 text-3xl font-semibold text-gray-700 l md:text-4xl">
          Fullstack Developer
        </h2>

        <p className="max-w-2xl mt-4 text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
          Passionate about building modern, intuitive, and efficient web
          applications. Always eager to learn and deliver real value in every
          project.
        </p>

        {/* Botones de navegación dentro del sitio */}
        <div className="flex justify-center gap-4 mt-6 md:justify-start">
          <Button text="See Projects" to="#projects" variant="primary" />
          <Button text="Contact Me" to="#contact" variant="secondary" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Home;

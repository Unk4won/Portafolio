import SectionWrapper from "../components/layout/SectionWrapper";
import ContactForm from "../components/ui/ContactForm";
import PersonalInfo from "../components/ui/PersonalInfo";
import ContactServices from "../components/ui/ContactServices";

/**
 * Componente principal de la sección "Contacto".
 * Contiene el formulario, datos personales y servicios.
 */
const Contact = () => {

  return (
    <SectionWrapper
      id="contact"
      colorSection="bg-white"
      role="region"
      aria-labelledby="contact-main-heading"
    >


      {/* Encabezado principal */}
      <div className="text-center ">
        <h2 id="contact-main-heading" className="text-3xl font-bold md:text-4xl lg:text-5xl text-emerald-400">
          Contact
        </h2>
        <p className="mt-3 text-gray-600">
          I'm available to collaborate on projects or answer your questions!
        </p>
      </div>

      {/* Grid principal con formulario + datos */}
      <div className="grid grid-cols-1 gap-8 mt-10 lg:self-start md:grid-cols-2" >
        {/* Formulario */}
        <ContactForm />

        {/* Info personal + servicios ofrecidos */}
        <div className="space-y-8 ">
          <PersonalInfo columnsClass="grid-cols-1 lg:grid-cols-2" />
          <ContactServices />
        </div>
  
      </div>
    </SectionWrapper>
  );
};

export default Contact;

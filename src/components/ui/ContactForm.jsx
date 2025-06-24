// src/components/ui/ContactForm.jsx
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * ContactForm
 * Formulario funcional con validación, envío por EmailJS y reCAPTCHA.
 * Los textos que ve el usuario están en inglés. Los comentarios están en español.
 */
const ContactForm = () => {
  // Configuración de react-hook-form para la gestión del formulario
  const {
    register, // Función para registrar campos del formulario
    handleSubmit, // Función para manejar el envío del formulario
    reset, // Función para resetear los campos del formulario
    formState: { errors, isSubmitting }, // Estado del formulario (errores, si se está enviando)
  } = useForm({ mode: "onChange" }); // 'onChange' valida el campo a medida que el usuario escribe

  const captchaRef = useRef(); // Ref para acceder al componente ReCAPTCHA
  const [success, setSuccess] = useState(null); // Estado para el resultado del envío (éxito/fallo)

  // Función que se ejecuta al enviar el formulario
  const onSubmit = async (data) => {
    // Obtener el token de reCAPTCHA
    const token = captchaRef.current?.getValue();

    // Validar que el captcha ha sido verificado
    if (!token) {
      toast.error("Please verify the captcha before submitting."); // Muestra un toast de error
      return; // Detiene la ejecución si no hay token
    }

    try {
      // Enviar el correo usando EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // ID del servicio de EmailJS (desde .env)
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // ID de la plantilla de EmailJS (desde .env)
        data, // Datos del formulario
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Clave pública de EmailJS (desde .env)
      );

      setSuccess(true); // Actualiza el estado a éxito
      toast.success("Message sent successfully! I'll reply soon."); // Muestra un toast de éxito
      reset(); // Resetea los campos del formulario
      captchaRef.current.reset(); // Resetea el captcha
    } catch (error) {
      console.error("Error sending message:", error); // Log del error en consola
      setSuccess(false); // Actualiza el estado a fallo
      toast.error("Failed to send message. Please try again later."); // Muestra un toast de error
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)} // Maneja el envío del formulario
      className="w-full max-w-lg bg-[#0D0D0D] p-6 rounded-xl shadow-xl space-y-4 overflow-x-hidden flex flex-col"
      aria-label="Contact Form" // Etiqueta accesible para el formulario
      role="form" // Rol ARIA para indicar que es un formulario
    >
      {/* Título del formulario */}
      <h2
        id="contact-form-heading" // ID para accesibilidad (aria-labelledby)
        className="mb-4 text-3xl font-bold text-center text-emerald-600"
      >
        Contact
      </h2>

      {/* Campo: Nombre */}
      <div>
        <label htmlFor="name" className="sr-only">Your name</label> {/* sr-only para accesibilidad visual */}
        <input
          type="text"
          id="name"
          placeholder="Your name *"
          aria-invalid={errors.name ? "true" : "false"} // Para indicar si el campo es inválido para lectores de pantalla
          {...register("name", { // Registro del campo con react-hook-form y sus reglas de validación
            required: "Name is required",
            maxLength: { value: 50, message: "Max 50 characters" },
          })}
          className="w-full p-3 mt-2 font-medium text-white bg-transparent border-b border-white placeholder:text-emerald-400/70 focus:outline-none focus:border-emerald-500"
        />
        {errors.name && ( // Muestra mensaje de error si existe
          <p role="alert" className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Campo: Email */}
      <div>
        <label htmlFor="email" className="sr-only">Your email</label>
        <input
          type="email"
          id="email"
          placeholder="Your email *"
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Regex para formato de email
              message: "Invalid email format",
            },
          })}
          className="w-full p-3 mt-2 font-medium text-white bg-transparent border-b border-white placeholder:text-emerald-400/70 focus:outline-none focus:border-emerald-500"
        />
        {errors.email && (
          <p role="alert" className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Campo: Asunto */}
      <div>
        <label htmlFor="subject" className="sr-only">Subject</label>
        <input
          type="text"
          id="subject"
          placeholder="Subject *"
          aria-invalid={errors.subject ? "true" : "false"}
          {...register("subject", {
            required: "Subject is required",
            maxLength: { value: 100, message: "Max 100 characters" },
          })}
          className="w-full p-3 mt-2 font-medium text-white bg-transparent border-b border-white placeholder:text-emerald-400/70 focus:outline-none focus:border-emerald-500"
        />
        {errors.subject && (
          <p role="alert" className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      {/* Campo: Mensaje */}
      <div>
        <label htmlFor="message" className="sr-only">Your message</label>
        <textarea
          id="message"
          rows="5" // Número inicial de filas
          placeholder="Your message *"
          {...register("message", {
            required: "Message is required",
            minLength: { value: 10, message: "Min 10 characters" },
            maxLength: { value: 1000, message: "Max 1000 characters" },
          })}
          className="w-full p-3 mt-2 font-medium text-white bg-transparent border border-white rounded-lg resize-y placeholder:text-emerald-400/70 focus:outline-none focus:border-emerald-500 max-h-40"
        />
        {errors.message && (
          <p role="alert" className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* reCAPTCHA */}
      <div className="flex justify-center"> {/* Contenedor flex para centrar el reCAPTCHA */}
        <ReCAPTCHA
          ref={captchaRef} // Asigna la ref
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} // Clave del sitio (desde .env)
          theme="dark" // Tema oscuro
        />
      </div>

      {/* Botón de envío */}
      <button
        type="submit"
        disabled={isSubmitting} // Deshabilita el botón mientras se envía
        className="w-full max-w-md py-3 text-white transition duration-300 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed mx-auto"
        aria-live="polite" // Para lectores de pantalla, informa sobre el estado del botón
      >
        {isSubmitting ? "Sending..." : "Send Message"} {/* Texto del botón condicional */}
      </button>

      {/* Contenedor de Toasts de notificación */}
      <ToastContainer
        position="bottom-center" // Posición de las notificaciones
        autoClose={5000} // Tiempo antes de que se cierren automáticamente
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" // Tema oscuro para los toasts
      />
    </form>
  );
};

export default ContactForm;
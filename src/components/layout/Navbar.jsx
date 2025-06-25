// src/components/layout/Navbar.jsx
import { useEffect, useState, useCallback, useRef } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { navItems } from '../../data/navData'; // Asegúrate de que esta ruta sea correcta

// --- Componente de Logo (Portable) ---
const Logo = () => (
  <a
    onClick={() => scroll.scrollToTop({ duration: 800, smooth: "easeInOutQuart" })}
    className="relative inline-block cursor-pointer group"
    aria-label="Ir a la sección de Inicio"
  >
    <h1 className="text-3xl font-bold text-black uppercase">
      Adriel.<span className="text-emerald-500">dev</span>
    </h1>
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

// --- Hook para Secciones Activas (Reutilizable) ---
const useActiveSection = (defaultSection = 'home') => {
  const [activeSection, setActiveSection] = useState(defaultSection);

  const handleIntersect = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '0px 0px -60% 0px',
      threshold: 0.1,
    });

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [handleIntersect]);

  return activeSection;
};

// --- Hook para medir la altura del Navbar dinámicamente (compartido) ---
// Este hook ahora es más general y solo mide el elemento al que se le pasa la ref.
const useDynamicNavbarHeight = () => {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };

    updateHeight(); 
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return { navRef, navHeight };
};

// --- Navegación de Escritorio ---
const DesktopNav = ({ activeSection }) => {
  const { navRef, navHeight } = useDynamicNavbarHeight(); // Obtiene la altura del navbar de escritorio
  // Para un navbar FIXED TOP, el offset debe ser negativo y igual a su altura.
  const desktopScrollOffset = -navHeight; 

  return (
    <nav
      ref={navRef}
      className="fixed top-0 z-50 items-center justify-between hidden w-full px-6 py-5 bg-white shadow-lg md:flex md:px-12"
      role="navigation"
      aria-label="Navegación principal de escritorio"
    >
      <Logo />
      <ul className="flex gap-10">
        {navItems.map(({ id, name }) => (
          <li key={id}>
            <ScrollLink
              to={id}
              spy={true}
              smooth={true}
              offset={desktopScrollOffset} // Usa el offset para desktop
              duration={1000}
              className={`relative font-semibold transition-colors duration-400 text-lg cursor-pointer
                ${activeSection === id ? 'text-emerald-500' : 'text-black'}
                after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-emerald-500 after:transition-all after:duration-400
                ${activeSection === id ? 'after:w-full' : 'after:w-0 group-hover:after:w-full'}`}
              activeClass="active"
              aria-current={activeSection === id ? 'page' : undefined}
              aria-label={`Ir a la sección de ${name}`}
            >
              {name}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// --- Navegación Móvil ---
const MobileNav = ({ activeSection }) => {
  // Para el navbar móvil, aunque medimos su altura (navHeight),
  // el offset para react-scroll DEBERÍA SER 0 o un pequeño valor positivo
  // porque el navbar está en la parte inferior y no "cubre" el contenido superior.
  const { navRef, navHeight } = useDynamicNavbarHeight(); 
  // Usa 0 para que la sección se alinee con el borde superior de la ventana.
  // Si el contenido se ve cortado por el navbar inferior,
  // necesitarías agregar un padding-bottom a tu contenedor de páginas o al body.
  const mobileScrollOffset = 0; // O un pequeño valor positivo si quieres un margen superior

  return (
    <nav
      ref={navRef} // Asigna la referencia al elemento <nav>
      className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg md:hidden"
      role="navigation"
      aria-label="Navegación móvil"
    >
      <ul className="flex items-center justify-around w-full h-full py-2">
        {navItems.map(({ id, icon: Icon, name }) => (
          <li key={id}>
            <ScrollLink
              to={id}
              spy={true}
              smooth={true}
              offset={mobileScrollOffset} // ¡Usa el offset ajustado para móvil!
              duration={1000}
              className={`flex flex-col items-center text-xs transition-colors duration-300 p-2 cursor-pointer
                ${activeSection === id ? 'text-emerald-500' : 'text-black'}`}
              activeClass="active"
              aria-current={activeSection === id ? 'page' : undefined}
              aria-label={`Ir a la sección de ${name}`}
            >
              <Icon size={28} />
              <span className="sr-only">{name}</span>
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// --- Componente Principal Navbar ---
const Navbar = () => {
  const activeSection = useActiveSection();

  return (
    <>
      <DesktopNav activeSection={activeSection} />
      <MobileNav activeSection={activeSection} />
    </>
  );
};

export default Navbar;
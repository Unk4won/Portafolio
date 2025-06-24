// src/hooks/useOnScreen.js
import { useState, useEffect, useRef } from 'react';

/**
 * Custom Hook para detectar si un elemento está visible en el viewport.
 * Modificado para que la animación se repita cada vez que el elemento
 * entre o salga del viewport.
 *
 * @param {Object} options - Opciones para Intersection Observer (e.g., { threshold: 0.1, rootMargin: '0px' })
 * @returns {[React.MutableRefObject, boolean]} Un array con la ref del elemento a observar y un booleano indicando si está visible.
 */
function useOnScreen(options) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Actualiza el estado isVisible basado en si el elemento está intersectando
      setIsVisible(entry.isIntersecting);

      // ¡IMPORTANTE!: Eliminamos la línea observer.unobserve(entry.target);
      // para que el observador siga activo y detecte entradas/salidas futuras.

    }, options);

    // Si el ref ya tiene un valor, observa el elemento
    // Si el ref cambia (ej. el componente se vuelve a montar), se re-observará
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Limpieza: desconecta el observador cuando el componente se desmonta
    return () => {
      // Asegurarse de que containerRef.current no sea null al limpiar
      // Esto es crucial para evitar errores si el elemento ya no existe
      if (containerRef.current) {
        // Almacenar el current en una variable local para el cleanup
        const currentRef = containerRef.current;
        observer.unobserve(currentRef);
      }
    };
  }, [containerRef, options]); // Dependencias para que el efecto se re-ejecute si cambian

  return [containerRef, isVisible];
}

export default useOnScreen;
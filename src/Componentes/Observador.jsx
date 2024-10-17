import { useState, useEffect } from 'react';

const useIntersectionObserver = (ref, options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const currentRef = ref.current; // Guardar el valor actual de ref.current en una variable local

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries; // Tomar la primera entrada
      setIsIntersecting(entry.isIntersecting); // Actualizar el estado de visibilidad
    }, options);

    if (currentRef) {
      observer.observe(currentRef); // Observar el elemento referenciado
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Limpiar el observador usando la copia local de ref.current
      }
    };
  }, [ref, options]); // Incluir ref y options como dependencias

  return isIntersecting;
};

export default useIntersectionObserver;
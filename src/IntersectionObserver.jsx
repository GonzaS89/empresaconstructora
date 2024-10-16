import React, { useEffect, useRef } from 'react';

const IntersectionObserverComponent = ({ onIntersect, threshold = 0.1, children }) => {
  const ref = useRef(null); // Creamos una referencia para el div

  useEffect(() => {
    const currentRef = ref.current; // Obtenemos el div actual

    // Verificamos si el navegador soporta IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      console.error('IntersectionObserver no está soportado en este navegador.');
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (onIntersect) {
          onIntersect(entry.isIntersecting, entry);
        }
      });
    }, {
      threshold
    });

    if (currentRef) {
      observer.observe(currentRef); // Observamos el div
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Deja de observar el div cuando se desmonta
      }
    };
  }, [onIntersect, threshold]);

  return <div ref={ref}>{children}</div>; // Retornamos el div referenciado
};

export default IntersectionObserverComponent;
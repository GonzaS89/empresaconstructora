import React , {useRef}from 'react';
import '../Estilos/Trabajos.css';
import { Especializacion } from '../Minicomponentes/Especializacion';
import useIntersectionObserver from './Observador';

export const Quehacemos = () => {

    const elementoRef = useRef(null) // Referencia al elemento que será observado
    const isVisible = useIntersectionObserver(elementoRef, { threshold: 0.1 });  

  return (
    <div className="container-quehacemos" ref={elementoRef}>
            <h1 className={isVisible ? 'zoomear' : ''}>Qué hacemos</h1>
            <h3 className={isVisible ? 'zoomear' : ''}>Creemos que para que las sociedades prosperen, todos debemos responsabilizarnos del mañana. Eso significa crear soluciones innovadoras para los desafíos del futuro. Es esta mentalidad la que nos inspira a mantener la curiosidad, actuar localmente y pensar internacionalmente</h3>
            <div className={isVisible ? "container-especializaciones zoomear" : '"container-especializaciones"'}>
            <Especializacion img = {'https://images03.nicepagecdn.com/c461c07a441a5d220e8feb1a/403d472a87e555e68834a6f2/low-angle-plain-concrete-structure-city-with-copy-space_23-2148814201.jpg'} texto = {'Diseño-Construcción'}/>
            <Especializacion img = {'https://images03.nicepagecdn.com/c461c07a441a5d220e8feb1a/ce5afd0f2a5f5048a72e94df/low-angle-building-city_23-2148814160.jpg'} texto = {'Remodelación'}/>
            <Especializacion img = {'https://images03.nicepagecdn.com/c461c07a441a5d220e8feb1a/03978994a9cf5ec8b64195f2/plain-concrete-structure-city-with-copy-space_23-2148814198.jpg'} texto = {'Espacios de la ciudad'}/>
            <Especializacion img = {'https://images03.nicepagecdn.com/c461c07a441a5d220e8feb1a/6b42a580ae8d57cbae739cc6/5da03891-cde7-5ff9-6ffe-2bdac41249d0.jpg?version='} texto = {'Ingenieros Civiles'}/>
            </div>
        </div>
  )
}

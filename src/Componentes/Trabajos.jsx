import React, {useRef} from 'react';
import '../Estilos/Trabajos.css';
import { Trabajo } from '../Minicomponentes/Trabajo';
import { Especializacion } from '../Minicomponentes/Especializacion';
import { ServicioCompletado } from '../Minicomponentes/ServicioCompletado';
import useIntersectionObserver from './Observador';


export const Trabajos = () => {

    const elementoRef = useRef(null) // Referencia al elemento que será observado
    const isVisible = useIntersectionObserver(elementoRef, { threshold: 0.1 });   

  return (
    <div className="container-trabajos" ref={elementoRef}>
        <div className="container-trabajosterminados">
            <h1 className={isVisible ? 'mostrartitulotrabajos' : ''}>Servicios completos de construcción</h1>
            <div className="tiposdetrabajo">
                <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/ff2de1cf56ee575b9990845a/klio-min.jpg" alt="" className={isVisible ? 'img-trabajo mostrarimgtrabajos' : 'img-trabajo' }/>
                <div className={isVisible ? 'listatrabajos mostrarlistatrabajos' : 'listatrabajos'}>
                <Trabajo  titulo = {'Soluciones digitales'} texto = {'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
                <Trabajo  titulo = {'Qué hacemos'} texto = {'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
                <Trabajo  titulo = {'Diseño de carreteras'} texto = {'Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
                </div>
                
            </div>
        </div>
        <div className="container-quehacemos">
            <h1>Qué hacemos</h1>
            <h3>Creemos que para que las sociedades prosperen, todos debemos responsabilizarnos del mañana. Eso significa crear soluciones innovadoras para los desafíos del futuro. Es esta mentalidad la que nos inspira a mantener la curiosidad, actuar localmente y pensar internacionalmente</h3>
            <div className="container-especializaciones">
            <Especializacion img = {'https://images03.nicepagecdn.com/c461c07a441a5d220e8feb1a/403d472a87e555e68834a6f2/low-angle-plain-concrete-structure-city-with-copy-space_23-2148814201.jpg'} texto = {'Diseño-Construcción'}/>
            <Especializacion img = {'https://images03.nicepagecdn.com/c461c07a441a5d220e8feb1a/ce5afd0f2a5f5048a72e94df/low-angle-building-city_23-2148814160.jpg'} texto = {'Remodelación'}/>
            <Especializacion img = {'https://images03.nicepagecdn.com/c461c07a441a5d220e8feb1a/03978994a9cf5ec8b64195f2/plain-concrete-structure-city-with-copy-space_23-2148814198.jpg'} texto = {'Espacios de la ciudad'}/>
            <Especializacion img = {'https://images03.nicepagecdn.com/c461c07a441a5d220e8feb1a/6b42a580ae8d57cbae739cc6/5da03891-cde7-5ff9-6ffe-2bdac41249d0.jpg?version='} texto = {'Ingenieros Civiles'}/>
            </div>
        </div>
        <div className="container-servicioscompletos">
            <h1>Servicios completos de construcción</h1>
            <div className="datos-servicioscompletados">
                <ServicioCompletado dato = {'m+'} texto = {'Pies cuadrados gestionados'} numero = {35}/>
                <ServicioCompletado dato = {''} texto = {'Empleados de nuestro equipo'} numero = {158}/>
                <ServicioCompletado dato = {'+'} texto = {'Clientes felices'} numero = {250}/>
                <ServicioCompletado dato = {''} texto = {'Premios'} numero = {34}/>
                
            </div>
        </div>
    </div>
  )
}

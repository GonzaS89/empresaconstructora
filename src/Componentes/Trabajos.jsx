import React, {useRef} from 'react';
import '../Estilos/Trabajos.css';
import { Trabajo } from '../Minicomponentes/Trabajo';
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
    </div>
  )
}

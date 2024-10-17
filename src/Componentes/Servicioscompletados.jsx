import React, {useRef} from 'react';
import '../Estilos/Trabajos.css';
import { ServicioCompletado } from '../Minicomponentes/ServicioCompletado';
import useIntersectionObserver from './Observador';

export const Servicioscompletados = () => {

    const elementoRef = useRef(null);
    const isVisible = useIntersectionObserver(elementoRef, {threshold : 0.1});

  return (
    <div className="container-servicioscompletos" ref={elementoRef}>
    <h1 className={isVisible ? 'zoomear' : ''}>Servicios completos de construcción</h1>
    <div className="datos-servicioscompletados">
        <ServicioCompletado dato = {'m+'} texto = {'Pies cuadrados gestionados'} numero = {35} visible = {isVisible}/>
        <ServicioCompletado dato = {''} texto = {'Empleados de nuestro equipo'} numero = {158} visible = {isVisible}/>
        <ServicioCompletado dato = {'+'} texto = {'Clientes felices'} numero = {250} visible = {isVisible}/>
        <ServicioCompletado dato = {''} texto = {'Premios'} numero = {34} visible = {isVisible}/>
        
    </div>
</div>
  )
}

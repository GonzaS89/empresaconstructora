import React from 'react';
import '../Estilos/Trabajos.css';
import { ServicioCompletado } from '../Minicomponentes/ServicioCompletado';
// import useIntersectionObserver from './Observador';

export const Servicioscompletados = () => {

    // const elementoRef = useRef(null);
    // const isVisible = useIntersectionObserver(elementoRef, {threshold : 0.1});
  return (
    <div className="container-servicioscompletos">
    <h1>Servicios completos de construcción</h1>
    <div className="datos-servicioscompletados">
        <ServicioCompletado dato = {'m+'} texto = {'Pies cuadrados gestionados'} numero = {35}/>
        <ServicioCompletado dato = {''} texto = {'Empleados de nuestro equipo'} numero = {158}/>
        <ServicioCompletado dato = {'+'} texto = {'Clientes felices'} numero = {250}/>
        <ServicioCompletado dato = {''} texto = {'Premios'} numero = {34}/>
        
    </div>
</div>
  )
}

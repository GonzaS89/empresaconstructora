import React from 'react';
import '../Estilos/Main.css';
import { Portada } from './Portada';
import { Servicios } from './Servicios';
import { Nosotros } from './Nosotros';
import { Trabajos } from './Trabajos';
import { Contacto } from './Contacto';


export const Main = () => {
  return (
    <div className="Main">
        <Portada />
        <Servicios />
        <Nosotros />
        <Trabajos />
        <Contacto />
    </div>
  )
}

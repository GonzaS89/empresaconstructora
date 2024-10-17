import React from 'react';
import '../Estilos/Main.css';
import { Portada } from './Portada';
import { Servicios } from './Servicios';
import { Nosotros } from './Nosotros';
import { Trabajos } from './Trabajos';
import { Contacto } from './Contacto';
import { Quehacemos } from './Quehacemos';
import { Servicioscompletados } from './Servicioscompletados';


export const Main = () => {
  return (
    <div className="Main">
        <Portada />
        <Servicios />
        <Nosotros />
        <Trabajos />
        <Quehacemos />
        <Servicioscompletados />
        <Contacto />
    </div>
  )
}

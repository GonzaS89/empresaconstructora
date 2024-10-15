import React from 'react';
import '../Estilos/Main.css';
import { Portada } from './Portada';
import { Servicios } from './Servicios';
import { Nosotros } from './Nosotros';


export const Main = () => {
  return (
    <div className="Main">
        <Portada />
        <Servicios />
        <Nosotros />
    </div>
  )
}

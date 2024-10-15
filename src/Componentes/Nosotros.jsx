import React from 'react';
import '../Estilos/Nosotros.css';
import { Caracteristica } from '../Minicomponentes/Caracteristica';

export const Nosotros = () => {

  const lista = [1,2,3,4]

  return (
    <div className='container-nosotros'>
      <div className="nosotros-caracteristicas">
        <div className="container-caracteristicas">
          <div className="caracteristicas">
            {lista.map ( (item,index) => (
              <Caracteristica index = {index} titulo = {index + 1}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

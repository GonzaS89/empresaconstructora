import React from 'react';
import '../Estilos/Trabajos.css';

export const Trabajo = (props) => {
  return (
    <div className="container-trabajo">
        <h2>{props.titulo}</h2>
        <p>{props.texto}</p>
    </div>
  )
}

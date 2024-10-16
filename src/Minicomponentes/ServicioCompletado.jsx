import React from 'react';
import '../Estilos/Trabajos.css';
import CountUp from 'react-countup';

export const ServicioCompletado = (props) => {
  return (
    <div className="serviciocompletado">
        <div className="dato">
        <CountUp start = {0} end = {props.numero} duration={2}/>{props.dato}
        </div>
        <h3>{props.texto}</h3>
    </div>
  )
}

import React from 'react';

export const Servicio = (props) => {
  return (
    <div className="container-servicio">
        <img src={props.img} alt="" className='img-servicio'/>
        <h2>{props.nombre}</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque consectetur minima aliquid laboriosam quidem necessitatibus dolor</p>
    </div>
  )
}

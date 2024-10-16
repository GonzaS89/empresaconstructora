import React from 'react'

export const Especializacion = (props) => {
  return (
    <div className="container-especializacion">
        <img src={props.img} alt="" />
        <p>{props.texto}</p>
    </div>
  )
}

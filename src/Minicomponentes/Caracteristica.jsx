import React from 'react';
import '../Estilos/Nosotros.css';

export const Caracteristica = (props) => {

    const determinarIndex = i => {
        if(i === 1){
            return 'container-caracteristica fondomorado titulogrande'
        }else if(i === 2){
            return 'container-caracteristica fondomorado'
        }else{return 'container-caracteristica'}
        
    }
  return (
    <div className={determinarIndex(props.index)}>
        <h2>Titulo {props.titulo}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolore quos nemo suscipit? Voluptate, minima id libero atque nemo quo</p>
    </div>
  )
}

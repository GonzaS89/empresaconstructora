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
        <h2>{props.titulo}</h2>
        <p>{props.texto}</p>
    </div>
  )
}

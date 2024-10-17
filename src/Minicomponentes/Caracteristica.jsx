import React  from 'react';
import '../Estilos/Nosotros.css';

export const Caracteristica = (props) => {

    const determinarIndex = i => {
        if(i === 1){
            return 'container-caracteristica fondomorado titulogrande'
        }else if(i === 2){
            return 'container-caracteristica fondomorado'
        }else{return 'container-caracteristica'}
        
    }

    const determinarClase = () => {
        if(props.visible)
            if(props.index === 0){
                return 'mostrar-caracteup'
            }else if(props.index === 1){
                return 'mostrar-caracteright'
            }else if(props.index === 2){
                return 'mostrar-caracteleft'
            }else if(props.index === 3){
                return 'mostrar-caractedown'
            }
            
    }

  return (
    <div className={`${determinarIndex(props.index)} ${determinarClase()}`}>
        <h2>{props.titulo}</h2>
        <p>{props.texto}</p>
    </div>
  )
}

import React from 'react';
import '../Estilos/Portada.css';

export const Portada = () => {
  return (
    <div className='container-portada'>
        <div className="portada-texto">
            <h1>La empresa de servicios de construcción</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum et voluptatem autem corporis magni optio, tenetur, ullam consequuntur cumque perferendis quas exercitationem suscipit eligendi fuga voluptas cupiditate expedita porro laudantium.</p>
            <button className='boton'>ver más</button>
        </div>
        <div className="portada-imagenes">
            <img src="https://assets.nicepagecdn.com/d2cc3eaa/73962/images/ggg-min.png" alt="" className='img-portada'/>
        </div>
    </div>
  )
}

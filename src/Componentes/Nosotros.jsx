import React ,{useRef}from 'react';
import '../Estilos/Nosotros.css';
import { Caracteristica } from '../Minicomponentes/Caracteristica';
import useIntersectionObserver from './Observador';

export const Nosotros = () => {

  const elementoRef = useRef(null) // Referencia al elemento que será observado
  const isVisible = useIntersectionObserver(elementoRef, { threshold: 0.1 }); 

  const lista = [1,2,3,4]

  return (
    <div className='container-nosotros' ref={elementoRef}>
      <div className="nosotros-caracteristicas">
        <div className="container-caracteristicas">
          <div className="caracteristicas">
            {lista.map ( (item,index) => (
              <Caracteristica index = {index} titulo = {index + 1} texto = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'} visible = {isVisible}/>
            ))}
          </div>
        </div>
      </div>
      <div className="container-mascaracteristicas">
        <div className="info_nosotros">
          <div className="info-bloque1">
            <h1>Nuestra Empresa brinda servicios de contratación general.</h1>
            <button className='boton'>Ver más</button>
            <div className='container-info'>
            <h2>Nosotros construimos calidad.</h2>
            <p className='info-texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
          </div>
          <div className="info-bloque2">
            <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/78deac0247445a6f8caf3f8a/jhjhjh6.jpg" alt="" />
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
          </div>
        </div>
      </div>
    </div>
  )
}

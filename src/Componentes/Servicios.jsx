import React from 'react';
import '../Estilos/Servicios.css';
import { Servicio } from '../Minicomponentes/Servicio'

export const Servicios = () => {

    const listaServicios = [
        {
            "nombre" : "Servicios de construcción",
            "img" :  "https://assets.nicepagecdn.com/d2cc3eaa/73962/images/e41a3935.png"
        },
       {
        "nombre" : "Sostenibilidad",
        "img" :  "https://assets.nicepagecdn.com/d2cc3eaa/73962/images/7f517f64.png"
       },
       {
        "nombre" : "Gestión de instalaciones",
        "img" : "https://assets.nicepagecdn.com/d2cc3eaa/73962/images/1f80a110.png"
       }
    ]

  return (
    <div className="container-servicios">
        <h1>Servicios de construcción, mantenimiento y remodelación</h1>
        <p>Empresa ofrece ingeniería mecánica, eléctrica y plomería para todo tipo de edificaciones, instalaciones de transporte y proyectos industriales de acuerdo a los requerimientos específicos de nuestros clientes.</p>
        <div className="container-tiposdeservicios">
            {listaServicios.map ( (servicio, index) => (
                <Servicio nombre = {servicio.nombre} img = {servicio.img}/>
            ))}
        </div>
    </div>
  )
}

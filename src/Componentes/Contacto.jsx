import React from 'react';
import '../Estilos/Contacto.css';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";


export const Contacto = () => {
  return (
    <div className="container-contacto">
        <h1>Contactános</h1>
        <div className="container-datos-formulario">
        <div className="contacto-info">
          <div className="minicontainer-info">
          <div className="info-contacto">
            <FaPhoneAlt className='icono-contacto'/>
            <h2>Llamános</h2>
          </div>
          <p>(0381) 497-6217</p>
          </div>
          <div className="minicontainer-info">
          <div className="info-contacto">
            <FaLocationDot className='icono-contacto'/>
            <h2>Ubicános</h2>
          </div>
          <p>Av. Alem 784 - San miguel de tucumán - Tucumán</p>
          </div>
            <div className="minicontainer-info">
            <div className="info-contacto">
            <FaClock className='icono-contacto'/>
            <h2>Ubicános</h2>
          </div>
          <p>Lunes-Viernes: 08:00 a 18:00 <br />Sábados : 08:00 a 12:00</p>
            </div>
        </div>
        <form action="" className="contacto-form">
            <div className="mail-nombre">
              <div className="mail">
                <label>Email</label>
                <input type="text" placeholder='Dejanos tu mail' className='input-mail-nombre'/>
              </div>
              <div className="nombre">
                <label>Nombre</label>
                <input type="text" placeholder='Dejanos tu nombre' className='input-mail-nombre'/>
              </div>
            </div>
            <div className="direccion">
              <label>Dirección</label>
              <input type="text" placeholder='Ingresá tu dirección' className='input-direccion'/>
            </div>
            <div className="cuadromensaje">
              <label>Mensaje</label>
              <textarea name="" id="" className='cuadrodemensaje' placeholder='Dejanos tu mensaje'></textarea>
            </div>
            <button className = "botonform">Enviar</button>
        </form>
        </div>
        
        
    </div>
  )
}

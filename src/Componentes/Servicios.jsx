import React , {useState} from 'react';
import '../Estilos/Servicios.css';
import { Servicio } from '../Minicomponentes/Servicio';
import IntersectionObserver from '../IntersectionObserver';

export const Servicios = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleIntersect = ()=> {setIsVisible(true)}
    const listaServicios = [
        {
            "nombre": "Servicios de construcción",
            "img": "https://assets.nicepagecdn.com/d2cc3eaa/73962/images/e41a3935.png"
        },
        {
            "nombre": "Sostenibilidad",
            "img": "https://assets.nicepagecdn.com/d2cc3eaa/73962/images/7f517f64.png"
        },
        {
            "nombre": "Gestión de instalaciones",
            "img": "https://assets.nicepagecdn.com/d2cc3eaa/73962/images/1f80a110.png"
        }
    ]

    return (

        <div className='container-servicios'>
            <IntersectionObserver onIntersect={handleIntersect}
      threshold={0.2}>
            <div className='tiposdeservicios'>
                <h1 className={isVisible && 'tituloservicios-animado'}>Servicios de construcción, mantenimiento y remodelación</h1>
                <p className={isVisible && 'textoservicios-animado'}>Empresa ofrece ingeniería mecánica, eléctrica y plomería para todo tipo de edificaciones, instalaciones de transporte y proyectos industriales de acuerdo a los requerimientos específicos de nuestros clientes.</p>
                <div className={isVisible ? 'container-tiposdeservicios tipodeserviciosanimado' : 'container-tiposdeservicios'}>
                    {listaServicios.map((servicio, index) => (
                        <Servicio nombre={servicio.nombre} img={servicio.img} />
                    ))}
                </div>
            </div>
            </IntersectionObserver>
            <div className="container-masservicios">
                <div className="container-servicios_texto">
                    <div className='titulo-info'>
                        <h1>Servicios de construcción</h1>
                        <p>Trabajamos en estrecha colaboración con todo el equipo del proyecto, asegurando una integración óptima de todos.</p>
                        <div className="tiposdeservicio">
                            <div className='servicio-texto'>
                                <h3>Liderando el camino</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illo vel ipsum, soluta ea in laborum quae dicta. Tempore dolores doloribus, molestiae sapiente pariatur blanditiis hic labore facilis nulla! Quos!</p>
                            </div>
                            <div className='servicio-texto'>
                                <h3>
                                    Ingeniería Mecánica</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus sunt a consectetur delectus accusamus beatae id facilis blanditiis repellat repudiandae? Cupiditate itaque quis nihil, quibusdam quisquam natus officia dolorem! Illo!</p>
                            </div>
                            <div className='listadeservicios'>
                                <p>Los servicios incluyen:</p>
                                <ul>
                                    <li>
                                        Calefacción, ventilación y aire acondicionado (HVAC)</li>
                                    <li>Modelado/análisis de dinámica de fluidos computacional (CFD)</li>
                                    <li>Tecnologías avanzadas (por ejemplo, ventilación por desplazamiento, estructuras activadas, geotermia)</li>
                                    <li>Sistemas de energía ultrabaja</li>
                                    <li>Almacenamiento térmico</li>
                                    <li>CHEM/mitigación de riesgos biológicos</li>
                                    <li>Sistemas y controles de automatización de edificios.</li>
                                    <li>Análisis y optimización de la envolvente del edificio.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-botones_info'>
                <div className='botones-info'>
                    <button className='boton'>Contactate con un experto</button>
                    <button className='boton'>Compartir</button>
                </div>
                </div>
                
            </div>
        </div>
    )
}

import React from 'react';
import Ubicacion from '../assets/Ubicacion.png';
import Usuario from '../assets/Usuario.jpg'

export const Contacto = () => {
  return (
    <div>
        <h1 className='text-center'>Contactos</h1>
        <div className="container-fluid">
          <p className='text-center'>
          Estamos aquí para ayudarte. Si tienes alguna pregunta, comentario o necesitas asistencia con tu pedido,
            no dudes en ponerte en contacto con nosotros. </p>
        </div>
        <h3 className='text-center'>Nuestros Puntos De Atencion.</h3>
        <div className="card-container">
          <div className="card" style={{width: "18rem"}}>
          <img src={Ubicacion} className="card-img-top" alt="Imagen De La Ubicacion"/>
            <div className="card-body">
              <h5 className="card-title">Punto las Vegas</h5>
              <p className="card-text">Direccion: Cll 90 # 45 - 45</p>
              <p className="card-text">Telefono: 3218402340</p>
            </div>
          </div>
          <div className="card" style={{width: "18rem"}}>
          <img src={Ubicacion} className="card-img-top" alt="Imagen De La Ubicacion" />
            <div className="card-body">
              <h5 className="card-title">Punto Caldas</h5>
              <p className="card-text">Direccion: Cll 80 # 45 - 95</p>
              <p className="card-text">Telefono: 3218402342</p>
            </div>
          </div>
          <div className="card" style={{width: "18rem"}}>
          <img src={Ubicacion} className="card-img-top" alt="Imagen De La Ubicacion" />
            <div className="card-body">
              <h5 className="card-title">Punto Manrique Central </h5>
              <p className="card-text">Direccion: Cr 70 # 85 - 65</p>
              <p className="card-text">Telefono: 3218402343</p>
            </div>
          </div>
          <div className="card" style={{width: "18rem"}}>
          <img src={Ubicacion} className="card-img-top" alt="Imagen De La Ubicacion" />
            <div className="card-body">
              <h5 className="card-title">Punto las Industriales</h5>
              <p className="card-text">Direccion: Cll 89 Cr 23 - 45</p>
              <p className="card-text">Telefono: 3218402344</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Contacto;

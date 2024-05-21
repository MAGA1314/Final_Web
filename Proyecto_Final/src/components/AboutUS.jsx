import React from 'react';
import Gerente from '../assets/Gerente.jpg';
import Quejas from '../assets/quejas.jpg';
import Atencion from '../assets/atencioncliente.jpg';
import Navbar from './Navbar'; // Asegúrate de que la ruta de importación sea correcta

const AboutUS = () => {
  return (
    <div>
      <h1 className='text-center'>Sobre Nosotros</h1>
      <div className="container-fluid">
        <p className='text-center'>
          Bienvenidos a PrimeMart Online, tu tienda de confianza para realizar tus compras diarias de manera rápida, segura y conveniente. 
          Desde nuestra fundación, nos hemos comprometido a ofrecer productos frescos, de alta calidad y a precios competitivos, todo al alcance de un clic. 
          Nuestro equipo de profesionales trabaja arduamente para asegurarse de que cada pedido sea preparado con esmero y entregado puntualmente, garantizando tu satisfacción. 
          Creemos en la importancia de apoyar a productores locales y ofrecer 
          una amplia gama de productos orgánicos y sostenibles. ¡Gracias por elegirnos y permitirnos ser parte de tu día a día!
        </p>
        <div className="card-container">
          <div className="card" style={{width: "18rem"}}>
            <img src={Gerente} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Gerente</h5>
              <p className="card-text">gerente@gmail.com</p>
              <p className="card-text">Telefono: 3218402349</p>
            </div>
          </div>
          <div className="card" style={{width: "18rem"}}>
            <img src={Atencion} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Atencion al Cliente</h5>
              <p className="card-text">atencioncliente@gmail.com</p>
              <p className="card-text">Telefono: 3218402389</p>
            </div>
          </div>
          <div className="card" style={{width: "18rem"}}>
            <img src={Quejas} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Quejas y Reclamos</h5>
              <p className="card-text">quejas@mail.com</p>
              <p className="card-text">Telefono: 3218402370</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;

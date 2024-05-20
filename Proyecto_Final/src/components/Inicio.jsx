import React from 'react';
import { Link } from 'react-router-dom';
import appFirebase from '../Credenciales';
import { getAuth, signOut } from 'firebase/auth';
import { get } from 'firebase/database';

const auth = getAuth(appFirebase);
import Registro from '../assets/Registro.jpg';
import Usuario from '../assets/Usuario.jpg'; // Asegúrate de que la ruta sea correcta
//import producto1 from '../productos/boxengasse.png'
export const Inicio = ({ correoUsuario }) => {
  return (
    <div>
      <h1 className='text-center'>Pagina De Inicio</h1>
      <section className="contenedor">
        {/* Contenedor de elementos */}
        <div className="contenedor-items">
          <div className="item">
            <span className="titulo-item">Box Engasse</span>
            <img src={Registro} alt="Box Engasse" className="img-item" />
            <span className="precio-item">$15.000</span>
            <button className="boton-item">Agregar al Carrito</button>
          </div>
          {/* Repite el patrón anterior para cada producto */}
          <div className="item">
            <span className="titulo-item">English Horse</span>
            <img src={Usuario} alt="English Horse" className="img-item" />
            <span className="precio-item">$25.000</span>
            <button className="boton-item">Agregar al Carrito</button>
          </div>
          {/* Continúa agregando productos según corresponda */}
        </div>
        {/* Carrito de Compras */}
        <div className="carrito" id="carrito">
          <div className="header-carrito">
            <h2>Tu Carrito</h2>
          </div>
          <div className="carrito-items">
            {/* Aquí irían los elementos del carrito, pero se dejó vacío para simplificar */}
          </div>
          <div className="carrito-total">
            <div className="fila">
              <strong>Tu Total</strong>
              <span className="carrito-precio-total">
                $120.000,00
              </span>
            </div>
            <button className="btn-pagar">Pagar <i className="fas fa-shopping-cart"></i></button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;

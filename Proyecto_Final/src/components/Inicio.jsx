import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import appFirebase from '../Credenciales';
import { getAuth, signOut } from 'firebase/auth';
import { get } from 'firebase/database';
import Carrito from './Carrito';

const auth = getAuth(appFirebase);
import Registro from '../assets/Registro.jpg';
import Usuario from '../assets/Usuario.jpg'; // Asegúrate de que la ruta sea correcta

export const Inicio = ({ correoUsuario }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (titulo, precio, imagenSrc, cantidadInicial) => {
    setCarrito(prevCarrito => [
     ...prevCarrito,
      { titulo, precio, imagenSrc, cantidad: cantidadInicial },
    ]);
  };

  return (
    <div>
      <h1 className='text-center'>Pagina De Inicio</h1>
      <section className="contenedor">
        <div className="contenedor-items">
          <div className="item">
            <span className="titulo-item">Box Engasse</span>
            <img src={Registro} alt="Box Engasse" className="img-item" />
            <span className="precio-item">$15.000</span>
            <button className="boton-item" onClick={() => agregarAlCarrito("Box Engasse", "$15.000", Registro, 1)}>Agregar al Carrito</button>
          </div>
          <div className="item">
            <span className="titulo-item">English Horse</span>
            <img src={Usuario} alt="English Horse" className="img-item" />
            <span className="precio-item">$25.000</span>
            <button className="boton-item" onClick={() => agregarAlCarrito("English Horse", "$25.000", Usuario, 1)}>Agregar al Carrito</button>
          </div>
          <div className="item">
            <span className="titulo-item">English Horse</span>
            <img src={Usuario} alt="English Horse" className="img-item" />
            <span className="precio-item">$25.000</span>
            <button className="boton-item" onClick={() => agregarAlCarrito("English Horse", "$25.000", Usuario, 1)}>Agregar al Carrito</button>
          </div>
          <div className="item">
            <span className="titulo-item">English Horse</span>
            <img src={Usuario} alt="English Horse" className="img-item" />
            <span className="precio-item">$25.000</span>
            <button className="boton-item" onClick={() => agregarAlCarrito("English Horse", "$25.000", Usuario, 1)}>Agregar al Carrito</button>
          </div>
          <div className="item">
            <span className="titulo-item">English Horse</span>
            <img src={Usuario} alt="English Horse" className="img-item" />
            <span className="precio-item">$25.000</span>
            <button className="boton-item" onClick={() => agregarAlCarrito("English Horse", "$25.000", Usuario, 1)}>Agregar al Carrito</button>
          </div>
          <div className="item">
            <span className="titulo-item">English Horse</span>
            <img src={Usuario} alt="English Horse" className="img-item" />
            <span className="precio-item">$25.000</span>
            <button className="boton-item" onClick={() => agregarAlCarrito("English Horse", "$25.000", Usuario, 1)}>Agregar al Carrito</button>
          </div>
          <div className="item">
            <span className="titulo-item">English Horse</span>
            <img src={Usuario} alt="English Horse" className="img-item" />
            <span className="precio-item">$25.000</span>
            <button className="boton-item" onClick={() => agregarAlCarrito("English Horse", "$25.000", Usuario, 1)}>Agregar al Carrito</button>
          </div>
          <div className="item">
            <span className="titulo-item">English Horse</span>
            <img src={Usuario} alt="English Horse" className="img-item" />
            <span className="precio-item">$25.000</span>
            <button className="boton-item" onClick={() => agregarAlCarrito("English Horse", "$25.000", Usuario, 1)}>Agregar al Carrito</button>
          </div>
          <div className="item">
            <span className="titulo-item">English Horse</span>
            <img src={Usuario} alt="English Horse" className="img-item" />
            <span className="precio-item">$25.000</span>
            <button className="boton-item" onClick={() => agregarAlCarrito("English Horse", "$25.000", Usuario, 1)}>Agregar al Carrito</button>
          </div>
          <div className="item">
            <span className="titulo-item">English Horse</span>
            <img src={Usuario} alt="English Horse" className="img-item" />
            <span className="precio-item">$25.000</span>
            <button className="boton-item" onClick={() => agregarAlCarrito("English Horse", "$25.000", Usuario, 1)}>Agregar al Carrito</button>
          </div>
          <div className="item">
            <span className="titulo-item">English Horse</span>
            <img src={Usuario} alt="English Horse" className="img-item" />
            <span className="precio-item">$25.000</span>
            <button className="boton-item" onClick={() => agregarAlCarrito("English Horse", "$25.000", Usuario, 1)}>Agregar al Carrito</button>
          </div>
          <div className="item">
            <span className="titulo-item">English Horse</span>
            <img src={Usuario} alt="English Horse" className="img-item" />
            <span className="precio-item">$25.000</span>
            <button className="boton-item" onClick={() => agregarAlCarrito("English Horse", "$25.000", Usuario, 1)}>Agregar al Carrito</button>
          </div>
        </div>
        
        <Carrito carrito={carrito} />
      </section>
    </div>
  );
};

export default Inicio;
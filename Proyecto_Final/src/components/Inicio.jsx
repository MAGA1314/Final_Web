import React, { useState } from 'react';
import Carrito from './Carrito';
import appFirebase from '../Credenciales';
import { getAuth, signOut } from 'firebase/auth';
import Registro from '../assets/Registro.jpg';
import Usuario from '../assets/Usuario.jpg'; // Asegúrate de que la ruta sea correcta

const auth = getAuth(appFirebase);
const Inicio = ({ correoUsuario }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (titulo, precio, imagenSrc) => {
    setCarrito(prevCarrito => {
      const itemIndex = prevCarrito.findIndex(item => item.titulo === titulo);
      let newCarrito;
      if (itemIndex >= 0) {
        newCarrito = [...prevCarrito];
        newCarrito[itemIndex].cantidad += 1;
      } else {
        newCarrito = [...prevCarrito, { titulo, precio, imagenSrc, cantidad: 1 }];
      }
      console.log("Carrito actualizado:", newCarrito);
      return newCarrito;
    });
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
            <button className="boton-item" onClick={() => agregarAlCarrito("Box Engasse", "$15.000", Registro)}>Agregar al Carrito</button>
          </div>
          <div className="item">
            <span className="titulo-item">English Horse</span>
            <img src={Usuario} alt="English Horse" className="img-item" />
            <span className="precio-item">$25.000</span>
            <button className="boton-item" onClick={() => agregarAlCarrito("English Horse", "$25.000", Usuario)}>Agregar al Carrito</button>
          </div>
        </div>
        <Carrito carrito={carrito} setCarrito={setCarrito} />
      </section>
    </div>
  );
};

export default Inicio;

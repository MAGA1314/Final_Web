import React, { useState } from 'react';
import PropTypes from 'prop-types';
import appFirebase from '../Credenciales';
import { getAuth, signOut } from 'firebase/auth';
import Registro from '../assets/Registro.jpg';
import Usuario from '../assets/Usuario.jpg';

const auth = getAuth(appFirebase);

const Inicio = ({ correoUsuario }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (titulo, precio, imagenSrc) => {
    setCarrito(prevCarrito => {
      const itemIndex = prevCarrito.findIndex(item => item.titulo === titulo);
      if (itemIndex >= 0) {
        const newCarrito = [...prevCarrito];
        newCarrito[itemIndex].cantidad += 0.5;
        return newCarrito;
      } else {
        return [...prevCarrito, { titulo, precio, imagenSrc, cantidad: 1 }];
      }
    });
  };

  const restarCantidad = (index) => {
    setCarrito(prevCarrito => {
      const newCarrito = [...prevCarrito];
      if (newCarrito[index].cantidad > 1) {
        newCarrito[index].cantidad -= 0.5;
      }
      return newCarrito;
    });
  };

  const sumarCantidad = (index) => {
    setCarrito(prevCarrito => {
      const newCarrito = [...prevCarrito];
      newCarrito[index].cantidad += 0.5;
      return newCarrito;
    });
  };

  const eliminarItem = (index) => {
    setCarrito(prevCarrito => {
      const newCarrito = [...prevCarrito];
      newCarrito.splice(index, 1);
      return newCarrito;
    });
  };

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + (parseFloat(item.precio.slice(1)) * item.cantidad), 0).toFixed(3);
  };

  const handlePagar = () => {
    if (carrito.length === 0) {
      alert('No hay productos en el carrito.');
      return;
    }

    // Simulate payment processing
    alert(`Pago exitoso! Total pagado: $${calcularTotal()}`);

    // Clear the cart after successful payment
    setCarrito([]);
  };

  return (
    <div>
      <h1 className='text-center'>Página De Inicio</h1>
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
        {/* Carrito de Compras */}
        <div className="carrito" id="carrito">
          <div className="header-carrito">
            <h2>Tu Carrito</h2>
          </div>

          <div className="carrito-items">
            {carrito.map((item, index) => (
              <div className="carrito-item" key={index}>
                <img src={item.imagenSrc} width="80px" alt={item.titulo} />
                <div className="carrito-item-detalles">
                  <span className="carrito-item-titulo">{item.titulo}</span>
                  <div className="selector-cantidad">
                    <button onClick={() => restarCantidad(index)}> - </button>
                    <input
                      type="text"
                      value={item.cantidad}
                      className="carrito-item-cantidad"
                      readOnly
                    />
                    <button onClick={() => sumarCantidad(index)}> + </button>
                  </div>
                  <span className="carrito-item-precio">{item.precio}</span>
                </div>
                <button className="btn-eliminar" onClick={() => eliminarItem(index)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            ))}
          </div>
          <div className="carrito-total">
            <div className="fila">
              <strong>Tu Total</strong>
              <span className="carrito-precio-total">${calcularTotal()}</span>
            </div>
            <button className="btn-pagar" onClick={handlePagar}>Pagar <i className="fa-solid fa-bag-shopping"></i> </button>
          </div>
        </div>
      </section>
    </div>
  );
};

Inicio.propTypes = {
  correoUsuario: PropTypes.string.isRequired,
};
export default Inicio;
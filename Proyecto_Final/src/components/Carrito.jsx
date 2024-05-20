import React, { useState } from 'react';
import Cajones from './Cajones';

const Carrito = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(false);

  const agregarAlCarrito = (titulo, precio, imagenSrc) => {
    setItems([...items, { titulo, precio, imagenSrc }]);
    setVisible(true);
  };

  const eliminarDelCarrito = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    if (newItems.length === 0) {
      setVisible(false);
    }
  };

  const sumarCantidad = (index) => {
    const newItems = items.map((item, i) => {
      if (i!== index) return item;
      return {...item, cantidad: item.cantidad + 1 };
    });
    setItems(newItems);
  };

  const restarCantidad = (index) => {
    const newItems = items.map((item, i) => {
      if (i!== index || item.cantidad <= 1) return item;
      return {...item, cantidad: item.cantidad - 1 };
    });
    setItems(newItems);
  };

  return (
    <div>
      {visible && (
        <div className="carrito">
          {/* Renderiza los elementos del carrito aquí */}
          {items.map((item, index) => (
            <div key={index}>
              <p>{item.titulo}</p>
              <p>{item.precio}</p>
              <button onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
              <button onClick={() => sumarCantidad(index)}>+</button>
              <button onClick={() => restarCantidad(index)}>-</button>
            </div>
          ))}
        </div>
      )}
      {/* Botón para abrir/cerrar el carrito */}
      <button onClick={() => setVisible(!visible)}>
        {visible? 'Cerrar' : 'Abrir Carrito'}
      </button>
    </div>
  );
};

export default Carrito;

// Carrito.jsx
const Carrito = ({ carrito, setCarrito }) => {
  const eliminarItem = (titulo) => {
    setCarrito(prevCarrito => prevCarrito.filter(item => item.titulo!== titulo));
  };

  const sumarCantidad = (titulo) => {
    setCarrito(prevCarrito =>
      prevCarrito.map(item =>
        item.titulo === titulo? {...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const restarCantidad = (titulo) => {
    setCarrito(prevCarrito =>
      prevCarrito.map(item =>
        item.titulo === titulo && item.cantidad > 1? {...item, cantidad: item.cantidad - 1 } : item
      )
    );
  };

  return (
    <div className="carrito">
      <div className="carrito-items">
        {carrito.map((item, index) => (
          <div key={index} className="carrito-item">
            <img src={item.imagenSrc} alt="" />
            <div className="carrito-item-detalles">
              <span>{item.titulo}</span>
              <div className="selector-cantidad">
                <button onClick={() => restarCantidad(item.titulo)}>-</button>
                <span>{item.cantidad}</span>
                <button onClick={() => sumarCantidad(item.titulo)}>+</button>
              </div>
              <span>${item.precio}</span>
              <button onClick={() => eliminarItem(item.titulo)}>Eliminar</button>
            </div>
            
          </div>
          
        ))}
      </div>
    </div>
  );
};
export default Carrito;
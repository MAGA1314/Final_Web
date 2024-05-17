import React from 'react'

export default function Cajones(image,precio,nombre) {
  return (
    <div className="box">
        <img src={image} alt={nombre} />
        <div className="info">
            <h3>{nombre}</h3>
            <p>{precio}</p>
        </div>
    </div>
  )
}

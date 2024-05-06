import React from 'react';
import { Link } from 'react-router-dom';
import appFirebase from '../Credenciales';
import { getAuth, signOut } from 'firebase/auth';
import { get } from 'firebase/database';

const auth = getAuth(appFirebase);
import Registro from '../assets/Registro.jpg';
import Usuario from '../assets/Usuario.jpg'; // Asegúrate de que la ruta sea correcta

export const Inicio = ({ correoUsuario }) => {
  return (
    <div>
      <h1 className='text-center'>Pagina De Inicio</h1>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className="carousel-item active" data-bs-interval="6000">
              <img src="./" alt="..." /> {/* Aquí está la corrección */}
              <div className="carousel-caption d-none d-md-block" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={Usuario} style={{ width: '20%', height: 'auto' }} alt="..." /> {/* Aquí está la corrección */}
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Registro} style={{ width: '20%', height: 'auto' }} alt="..." /> {/* Aquí está la corrección */}
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </div>
  );
};

export default Inicio;
// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import appFirebase from '../Credenciales';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(appFirebase);

const Navbar = ({ correoUsuario }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Bienvenido {correoUsuario}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            <Link to="/contacto" className="nav-link">Contacto</Link>
            <Link to="/about" className="nav-link">AboutUs</Link>
            <button className='btn btn-primary' onClick={() => signOut(auth)}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

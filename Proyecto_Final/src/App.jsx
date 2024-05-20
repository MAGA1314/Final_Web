// App.js
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import appFirebase from './Credenciales';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Registro from './components/Registro';
import Contacto from './components/Contacto';
import AboutUS from './components/AboutUS';
import Navbar from './components/Navbar'; // Asegúrate de importar Navbar
import Nombre from './components/Nombre';
import Encabezado from './components/Encabezado';
import Cajones from './components/Cajones';
import Productos from './components/Productos';

const auth = getAuth(appFirebase);

function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });

    // Limpiar la suscripción al desmontar el componente
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Navbar correoUsuario={usuario? usuario.email : 'Invitado'} />
        <div className='main-content'>
          <Routes>
            <Route path="/" element={usuario? <Inicio correoUsuario={usuario.email} /> : <Registro />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/about" element={<AboutUS />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;

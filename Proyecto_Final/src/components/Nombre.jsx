import React from 'react'
import { Router } from 'react-router-dom'
import Imagen from '..assets.mercado.jpg' 

export default function Nombre() {
  return (
    <div className="box" sx={{backgroundImage:'mercado.jpg'}}>
        <h1>PrimeMart</h1>
    </div>
  )
};

export default function Encabezado() {
    return(
        <Router>
            <header>
                <div className='sobrenosotros' sx={{display:'flex', alingContent:'right'}}>
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/about" element={<AboutUS />} />
                </div>
                <div className="botones" sx={{display:'flex',alingContent:'left'}}>
                    <button sx={{display:'flex',bgcolor:'blue',color:'#ffffff'}}>Iniciar sesion</button>
                    <button sx={{display:'flex',bgcolor:'blue',color:'#ffffff'}}> Registro</button>
                </div>
            </header>
        </Router>
    )
}
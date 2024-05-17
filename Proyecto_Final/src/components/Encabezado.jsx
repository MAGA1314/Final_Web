import React from 'react'

export default function Encabezado() {
  return (
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

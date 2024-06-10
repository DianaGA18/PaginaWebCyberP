import React from 'react';
import Inicio from './components/Inicio'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IniciaSesion from './components/IniciaSesion';
import Registrarse from './components/Registrarse';
import CarroLink from './components/CarroLink';
import Promociones from './components/categorias/Promociones';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}/>
          <Route path="/inicia-sesion" element={<IniciaSesion />} />
          <Route path="/registrarme" element={<Registrarse />} />
          <Route path="/carrito" element={<CarroLink/>}/>
          <Route path="/promocion" element={<Promociones/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;

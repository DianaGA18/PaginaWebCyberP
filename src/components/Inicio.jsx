import React from 'react';
import './index.css';
import Menu from './Menu';
import Carrusel from './Carrusel';
import Barra from './Barra';
import ProductosDest from './ProductosDest';

function Inicio() {
  return (
    <div>
      <Menu></Menu>
      <div>
        <Carrusel></Carrusel>
      </div>
      <Barra></Barra>
      <ProductosDest></ProductosDest>
    </div>
  );
}

export default Inicio;

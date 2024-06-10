import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Menu() {
  const [openIngresar, setOpenIngresar] = useState(false);
  const [openCategoria, setOpenCategoria] = useState(false);
  const [openCentroInfo, setOpenCentroInfo] = useState(false);
  const navigate = useNavigate();

  const MenuIngresar = [
    { name: 'Inicia Sesión', path: '/inicia-sesion' },
    { name: 'Registrarme', path: '/registrarme' }
  ];
  const MenuCategorias = [
    { name:'Promociones', path:'/promocion'},
    { name:'Nuevos Artículos', path:'/nuevos-articulos'},
    { name:'Cómputo (Hardware)', path:'/computo-hardware'},
    { name:'Computadoras', path:'/computadoras'},
    { name:'Impresion y Teclado', path:'/impresion-teclado'},
    { name:'Audio y Video', path:'/audio-video'},
    { name:'Energía', path:'/energia'},
    { name:'Celulares y Telefonía', path:'/celulares-telefonia'}
  ];
  const MenuCentroInf = [
    { name: 'Quiénes Somos', path: '/quienes-somos' },
    { name: 'Contacto', path: '/contacto' },
    { name: 'Preguntas Frecuentes', path: '/preguntas-frecuentes' }
  ];

  const menuIngRef = useRef();
  const btnIngRef = useRef();
  const menuCatRef = useRef();
  const btnCatRef = useRef();
  const menuCentInRef = useRef();
  const btnCentInRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuIngRef.current && e.target !== btnIngRef.current) {
      setOpenIngresar(false);
    }
    if (e.target !== menuCatRef.current && e.target !== btnCatRef.current) {
      setOpenCategoria(false);
    }
    if (e.target !== menuCentInRef.current && e.target !== btnCentInRef.current) {
      setOpenCentroInfo(false);
    }
  });

  const handleMenuClick = (path) => {
    navigate(path);
    setOpenIngresar(false);
    setOpenCategoria(false);
  };

  const handleCarritoClick = () => {
    navigate('/carrito');
  };

  return (
    <div>
      <header className='bg-[#27A3DF] p-2 mb-1 grid grid-cols-3'>
        <div className='flex flex-col ml-8 max-w-full'>
          <div className='flex items-center space-x-2 mb-2'>
            <p className='text-[#FFFFFF] font-bold text-2xl'>CYBER</p>
            <img className='mt-3 w-16' src={`${process.env.PUBLIC_URL}/static/img/cybrporton.png`} alt="Cyber Porton" />
            <p className='text-[#FFFFFF] ml-3 font-bold text-2xl'>PORTÓN</p>
          </div>
        </div>
        <div className='relative'>
          <div className='flex items-center space-x-8 relative mt-4'>
            <button
              className='text-white font-bold px-4 py-3 rounded-lg hover:bg-[#2288ba]'
              onClick={() => setOpenIngresar(!openIngresar)}
              ref={btnIngRef}
            >
              Ingresar
            </button>
            <button
              className='text-white font-bold px-4 py-3 rounded-lg hover:bg-[#2288ba]'
              onClick={() => setOpenCategoria(!openCategoria)}
              ref={btnCatRef}
            >
              Categoria
            </button>
            <button className='text-white font-bold px-4 py-3 rounded-lg hover:bg-[#2288ba]'
            onClick={() => setOpenCentroInfo(!openCentroInfo)}
            ref={btnCentInRef}>Centro de Información</button>
          </div>

          {openIngresar && (
            <div className='bg-white p-4 w-52 shadow-lg absolute left-50 z-20' ref={menuIngRef}>
              <ul>
                {MenuIngresar.map((menuing) => (
                  <li
                    onClick={() => handleMenuClick(menuing.path)}
                    className='text-lg p-2 cursor-pointer rounded hover:bg-blue-100'
                    key={menuing.name}
                  >
                    {menuing.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {openCategoria && (
            <div className='bg-white p-4 w-52 shadow-lg absolute left-32 z-20 ' ref={menuCatRef}>
              <ul>
                {MenuCategorias.map((menucat) => (
                  <li
                  onClick={() => handleMenuClick(menucat.path)}
                  className='text-lg p-2 cursor-pointer rounded hover:bg-blue-100'
                  key={menucat.name}
                  >
                    {menucat.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {openCentroInfo && (
            <div className='bg-white p-4 w-52 shadow-lg absolute left-64 z-20 ml-2' ref={menuCentInRef}>
              <ul>
                {MenuCentroInf.map((menucent) => (
                  <li
                  onClick={() => handleMenuClick(menucent.path)}
                  className='text-lg p-2 cursor-pointer rounded hover:bg-blue-100'
                  key={menucent.name}
                  >
                    {menucent.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className='flex items-center space-x-4'>
          <input className="p-2 border border-gray-300 rounded-md" type="text" />
          <button className='bg-green-500 text-white px-8 py-2 rounded-lg'>Buscar</button>
          <img className='w-14 cursor-pointer' src={`${process.env.PUBLIC_URL}/static/img/carrito.png`} alt="Carrito de Compras" onClick={handleCarritoClick} />
          <p className='text-[#FFFFFF] font-bold text-2xl'>$0.00</p>
        </div>
      </header>
    </div>
  );
}

export default Menu;

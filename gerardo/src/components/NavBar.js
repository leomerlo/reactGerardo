import React from 'react';
import logo from '../assets/logo.png';
import './NavBar.css';

function NavBar() {
  return (
    <header>
      <div className="flex justify-between m-3 items-center">
        <div className="m-3"> </div>
        <div className="m-3 text-center">
          <img src={logo} className="w-24" alt="logo" />
          <span className="text-xs">Gerardo</span>
        </div>
        <div className="m-3">
          
        </div>
      </div>
      <div className="flex justify-center m-3">
        <ul className='flex'>
          <li><a href="#" className="p-5 text-sm">Home</a></li>
          <li><a href="#" className="p-5 text-sm">Nosotros</a></li>
          <li><a href="#" className="p-5 text-sm">Contacto</a></li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;

import React from 'react';
import logo from '../assets/logo.png';
import CartWidget from './CartWidget';
import './NavBar.css';

function NavBar() {
  return (
    <header>
      <div className="flex justify-between m-3 items-center">
        <div className="m-3 flex-1"> </div>
        <div className="menuLogo">
          <img src={logo} className="w-24" alt="logo" />
          <span className="text-xs m-2 block">Gerardo</span>
        </div>
        <div className="m-3 flex-1 flex justify-end">
          <CartWidget items="5" />
        </div>
      </div>
      <div className="flex justify-center m-3">
        <ul className='flex menuList'>
          <li><a href="#" className="menuItem active">Hongos</a></li>
          <li><a href="#" className="menuItem">Insumos</a></li>
          <li><a href="#" className="menuItem">Guias</a></li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;

import React, { useContext } from 'react';
import logo from '../../assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { NavLink, Link } from 'react-router-dom'
import CartContext from '../../store/CartContext';

function NavBar() {

  const { totalItems } = useContext(CartContext);

  return (
    <header>
      <div className="flex justify-between m-3 items-center">
        <div className="m-3 flex-1"> </div>
        <div className="menuLogo">
          <Link to="/">
            <img src={logo} className="w-24" alt="logo" />
            <span className="text-xs m-2 block">Gerardo</span>
          </Link>
        </div>
        <div className="m-3 flex-1 flex justify-end">
          {
            totalItems() > 0 ?
            <CartWidget />:
            <></>
          }
        </div>
      </div>
      <div className="flex justify-center m-3">
        <ul className='flex menuList'>
          <li><NavLink className="menuItem" to={`/`} activeclassname="true">Todos los productos</NavLink></li>
          <li><NavLink className="menuItem" to={`/categories/1`} activeclassname="true">Hongos</NavLink></li>
          <li><NavLink className="menuItem" to={`/categories/2`} activeclassname="true">Insumos</NavLink></li>
          <li><NavLink className="menuItem" to={`/categories/3`} activeclassname="true">Guias</NavLink></li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;

import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css';
import CartContext from '../../store/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {

    const context = useContext(CartContext);

  return (
    <Link
        className="cartButton"
        to="/cart"
    >
        <FontAwesomeIcon
            className="text-lg"
            icon={faCartShopping}
        />
        <span
            className="sr-only"
        >
            Tenés { context.totalItems() } en el carro.
        </span>
        <span
            aria-hidden
            className="cartBadge"
        >
            { context.totalItems() }
        </span>
    </Link>
  );
}

export default CartWidget;

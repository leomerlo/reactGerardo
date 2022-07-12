import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css';
import CartContext from '../../store/CartContext';

function CartWidget() {

    const context = useContext(CartContext);

  return (
    <button
        className="cartButton"
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
    </button>
  );
}

export default CartWidget;

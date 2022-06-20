import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css';

function CartWidget({ items }) {
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
            Tenés { items } en el carro.
        </span>
        <span
            aria-hidden
            className="cartBadge"
        >
            { items }
        </span>
    </button>
  );
}

export default CartWidget;

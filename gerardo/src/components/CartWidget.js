import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css';

function CartWidget() {
  return (
    <button className="text-sm">
        <FontAwesomeIcon icon={faCartShopping} />
    </button>
  );
}

export default CartWidget;

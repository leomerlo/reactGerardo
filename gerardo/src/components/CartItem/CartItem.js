import React from 'react'
import './CartItem.css'

const CartItem = ({ id, name, brand, price, image, quantity, onRemove, changeItemNum }) => {

  const onRemoveHandler = () => {
    onRemove(id);
  }

  return (
    <div className="cart-list-item">
      <div className="cart-item-image">
        <img src={image} alt={name} />
      </div>
      <div className='cart-item-title'>
        <h2>{name}</h2>
        <p>{brand}</p>
      </div>
      <div className='cart-item-quantity'>
        <span>x {quantity}</span>
      </div>
      <div className='cart-item-price'>
        <span>${price}</span>
      </div>
      <div className='cart-item-controls'>
        <button onClick={onRemoveHandler}>Eliminar</button>
      </div>
    </div>
  )
}

export default CartItem
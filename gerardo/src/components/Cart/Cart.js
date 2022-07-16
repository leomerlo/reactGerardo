import React, { useContext } from 'react'
import './Cart.css'
import CartItem from '../CartItem/CartItem';
import CartContext from '../../store/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {

  const { cartList, removeItem, totalPrice } = useContext(CartContext)

  console.log(cartList)

  const onRemoveHandler = (id) => {
    removeItem(id)
  }

  return (
    <div>
      <div className="page-title-header">
        <h1>Tu Carrito</h1>
      </div>
        {
          cartList.length > 0 ?
            <>
              <ul>
              {
                cartList.map((cartItem) => {
                  return (
                    <li key={cartItem.id}>
                      <CartItem { ...cartItem } onRemove={onRemoveHandler} />
                    </li>
                  )
                })
              }
              </ul>
              <div className="total-wrapper">
                <div className="total-label">
                  <span>Total:</span>
                </div>
                <div className="total-value">
                  <span>${totalPrice()}</span>
                </div>
              </div>
            </>
          :
            <div className="cart-empty">
              <h2 className="title">No hay elementos en tu carrito.</h2>
              <p className="text">Volvé al <Link to="/">inicio</Link> para comenzar tu compra</p>
            </div>
            
        }
    </div>
  )
}

export default Cart
import React, { useContext, useState } from 'react'
import './Cart.css'
import CartItem from '../CartItem/CartItem';
import CartContext from '../../store/CartContext';
import { Link } from 'react-router-dom';
import { getFirestore, addDoc, collection, writeBatch, doc, getDoc } from 'firebase/firestore';

const Cart = () => {

  const { cartList, removeItem, totalPrice } = useContext(CartContext)
  const [ orderFinished, setOrderFinished ] = useState('')
  const [ orderStep, setOrderStep ] = useState(0)
  const [user, setUser] = useState({
    name: 'Leo',
    phone: '+5491123997318',
    email: 'merloleandro@gmail.com'
  });
  const db = getFirestore();

  const onRemoveHandler = (id) => {
    removeItem(id)
  }

  const moveStep = (e) => {
    e.preventDefault();
    setOrderStep(1);
  }

  const finalizarCompra = () => {
    const orderCollection = collection(db, "orders");
    const batch = writeBatch(db)

    const orderList = cartList.map((e) => {
      const ref = doc(db,'products',e.id);
      getDoc(ref).then((item) => {
        batch.update(ref, { stock: item.data().stock - e.quantity });
        return {
          id: e.id || '0',
          title: e.name,
          price: e.price
        };
      });
    })
    
    const docRef = addDoc(orderCollection, {
      date: new Date(),
      items: orderList,
      user: user,
      total: totalPrice()
    }).then((e) => {
      setOrderFinished(e.id);
      batch.commit();
    });
  } 

  return (
    <div>
      <div className="page-title-header">
        <h1>Tu Carrito</h1>
      </div>
      {
        orderFinished.length < 1 ?
        <>
        {
          cartList.length > 0 ?
            <>
              {
                orderStep == 0 ?
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
                    <div className="total-wrapper">
                      <div className="total-label">
                      </div>
                      <div className="total-value">
                        <button onClick={moveStep}>Finalizar compra</button>
                      </div>
                    </div>
                  </>
                :
                  <>
                    <div className="user-form">
                      <h3>Dejanos tu información para finalizar tu compra.</h3>
                      <form>
                        <div className="form-row">
                          <label htmlFor="name">Nombre:</label>
                          <input id="name" name="name" />
                        </div>
                        <div className="form-row">
                          <label htmlFor="phone">Telefono:</label>
                          <input id="phone" name="phone" />
                        </div>
                        <div className="form-row">
                          <label htmlFor="mail">Mail:</label>
                          <input id="mail" name="mail" />
                        </div>
                        <div className="form-row total-value">
                          <button type="submit" onClick={finalizarCompra}>Enviar</button>
                        </div>
                      </form>
                    </div>
                  </>
              }
            </>
          :
            <div className="cart-empty">
              <h2 className="title">No hay elementos en tu carrito.</h2>
              <p className="text">Volvé al <Link to="/">inicio</Link> para comenzar tu compra</p>
            </div>   
        }
        </>
        :
        <>
          <h2>Gracias por tu compra</h2>
          <p>Número de orden: { orderFinished }</p>
        </>
      }
        
    </div>
  )
}

export default Cart
import React, { useContext, useState } from 'react'
import './Cart.css'
import CartItem from '../CartItem/CartItem';
import CartContext from '../../store/CartContext';
import { Link } from 'react-router-dom';
import { getFirestore, addDoc, collection, writeBatch, doc, getDoc } from 'firebase/firestore';

const Cart = () => {

  const { cartList, removeItem, totalPrice, clearCart } = useContext(CartContext)
  const [ orderFinished, setOrderFinished ] = useState('')
  const [ orderStep, setOrderStep ] = useState(0)
  const [ formError, setFormError ] = useState('')
  const [ user, setUser ] = useState({
    username: '',
    phone: '',
    email: ''
  });
  const db = getFirestore();

  const onRemoveHandler = (id) => {
    removeItem(id)
  }

  const moveStep = (e) => {
    e.preventDefault();
    setOrderStep(1);
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setUser({
      [name]: value
    });
  }

  const finalizarCompra = (e) => {
    e.preventDefault();
    setFormError([]);

    if(
      user.username === '' ||
      user.phone === '' ||
      user.email === ''
    ) {
      setFormError('Todos los campos son requeridos. Intentalo nuevamente')
      return false; 
    }

    const orderCollection = collection(db, "orders");
    const batch = writeBatch(db)

    cartList.map((e) => {
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

    const newOrder = {
      date: new Date(),
      items: cartList,
      user: user,
      total: totalPrice()
    }
    
    const docRef = addDoc(orderCollection, newOrder).then((e) => {
      setOrderFinished(e.id);
      clearCart();
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
                      {formError}
                      <form>
                        <div className="form-row">
                          <label htmlFor="name">Nombre:</label>
                          <input id="name" name="username" value={user.name} onChange={handleInputChange} />
                        </div>
                        <div className="form-row">
                          <label htmlFor="phone">Telefono:</label>
                          <input id="phone" name="phone" value={user.name} onChange={handleInputChange} />
                        </div>
                        <div className="form-row">
                          <label htmlFor="mail">Mail:</label>
                          <input id="email" name="email" value={user.name} onChange={handleInputChange} type="email" />
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
        <div className="text-center">
          <h2 className="text-lg mb-3">Gracias por tu compra</h2>
          <p>Número de orden: { orderFinished }</p>
        </div>
      }
        
    </div>
  )
}

export default Cart
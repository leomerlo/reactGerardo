import React, { useState } from 'react';

const CartContext = React.createContext({
    cartList: [],
    addItem: (item,qty) => {},
    removeItem: (id) => {},
    clearCart: () => {},
    totalItems: () => {},
    totalPrice: () => {},
})

export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);
    
    const addItemHandler = (item, qty) => {
        let newCart;
        if(itemExists(item.id)) {
          newCart = cartList.map((e) => {
            if(e.id === item.id) {
              e.quantity += qty;
            }
            return e;
          })
        } else {
          const newItem = {
            ...item,
            quantity: parseInt(qty)
          }
          
          newCart = [
              ...cartList,
              newItem
          ]
        }
        setCartList(newCart);
    }
  
    const removeItemHandler = (id) => {
      const newCart = [...cartList];
      newCart.forEach((e, index) => {
        if(e.id === id){
            newCart.splice(index,1);
        }
      });
      setCartList(newCart);
    }
  
    const itemExists = (id) => {
      return cartList.find((e) => e.id === id);
    }
  
    const totalItemsHandler = () => {
      let totalAmmount = 0;
      cartList.forEach((e) => {
        totalAmmount += e.quantity
      })
      return totalAmmount;
    }

    const totalPriceHandler = () => {
      let totalPrice = 0;
      cartList.forEach((e) => {
        totalPrice += e.quantity * e.price
      })
      return totalPrice;
    }
  
    const clearHandler = () => {
      setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList: cartList,
            addItem: addItemHandler,
            removeItem: removeItemHandler,
            clearCart: clearHandler,
            totalItems: totalItemsHandler,
            totalPrice: totalPriceHandler
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext;
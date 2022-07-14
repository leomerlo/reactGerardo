import React, { useState } from 'react'
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ image, name, brand, price, stock }) => {

    let navigate = useNavigate()

    const [reactiveStock, setReactiveStock] = useState(stock);

    const itemAddHandler = (ammount) => {
        const newAmmount = reactiveStock - ammount;
        setReactiveStock(newAmmount);
    }

    const checkoutHandler = () => {
        navigate("/cart", { replace: true });
    }

  return (
    <>
        <div className="item-detail-image flex-auto w-64">
            <img className="mx-auto" src={image} alt={name} />
        </div>
        <div className="item-detail-details flex-1">
            <div className="item-detail-data-wrapper">
                <span className="text-base my-2">{ name }</span>
                <span className="uppercase my-2">{ brand }</span>
                <span className="my-2 text-sm">${ price }</span>
                { reactiveStock > 0 ? <ItemCount stock={ reactiveStock } onAdd={itemAddHandler} /> : <span className="text-sm">No hay stock disponible</span> }
                <button className="item-details-checkout-btn" onClick={checkoutHandler} >Terminar mi compra</button>
            </div>
        </div>
    </>
  )
}

export default ItemDetail
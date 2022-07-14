import React from 'react'
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ image, name, brand, price, stock }) => {
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
                { stock > 0 ? <ItemCount stock={ stock } /> : <span className="text-sm">No hay stock disponible</span> }
            </div>
        </div>
    </>
  )
}

export default ItemDetail
import React from 'react';
import './ItemCard.css';

function ItemCard({ name, brand, price }) {
    return (
        <article>
            <div className="item-card-wrapper">
                <div className="item-card-image">
                    <img src="https://via.placeholder.com/300" />
                </div>
                <div className="item-card-details">
                    <span className="item-card-name">{name}</span>
                    <span className="item-card-brand">{brand}</span>
                    <span className="item-card-price">${price}</span>
                </div>
            </div>
        </article>
    )
}

export default ItemCard;
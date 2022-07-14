import React from 'react';
import './ItemCard.css';
import { Link } from 'react-router-dom'

function ItemCard({ id, name, brand, price, image }) {
    return (
        <article>
            <div className="item-card-wrapper">
                <Link to={`/products/${id}`}>
                    <div className="item-card-image">
                        <img className="item-card-image-img" src={image} alt={name} />
                    </div>
                    <div className="item-card-details">
                        <span className="item-card-name">{name}</span>
                        <span className="item-card-brand">{brand}</span>
                        <span className="item-card-price">${price}</span>
                    </div>
                </Link>
            </div>
        </article>
    )
}

export default ItemCard;
import React from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ItemCard from '../ItemCard/ItemCard';
import './ItemList.css';

function ItemList({ list }) {

    return (
        <section>
            {
                list.length < 1 ?
                <ErrorMessage message="No hay items en la categoria que buscas." /> :
                <div className="item-list">
                    { list.map(item => <ItemCard key={item.id} { ...item } />) }
                </div>
            }
        </section>
    );
}

export default ItemList;
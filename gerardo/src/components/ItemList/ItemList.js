import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './ItemList.css';

function ItemList({ list }) {

    

    return (
        <section className="item-list">
            {list.map(item => <ItemCard key={item.id} name={item.name} brand={item.brand} price={item.price}/>)}
        </section>
    );
}

export default ItemList;
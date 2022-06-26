import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import './ItemList.css';

function ItemList() {

    let [list, setList] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('data.json')
            .then(resp => resp.json())
            .then(data => setList(data))
        },2000);
    }, []);

    return (
        <section className="item-list">
            {list.map(item => <ItemCard key={item.id} name={item.name} brand={item.brand} price={item.price}/>)}
        </section>
    );
}

export default ItemList;
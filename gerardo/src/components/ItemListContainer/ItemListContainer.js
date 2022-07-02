import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

function ItemListContainer() {

    let [list, setList] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch('data.json')
            .then(resp => resp.json())
            .then(data => setList(data))
        },2000);
    }, []);

    return (
        <div className="mt-8 text-center">
            <ItemList list={list} />
        </div>
    );
}

export default ItemListContainer;
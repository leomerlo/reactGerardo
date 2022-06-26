import React from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css';

function ItemListContainer({ greeting }) {
    return (
        <div className="mt-8 text-center">
            <ItemList />
        </div>
    );
}

export default ItemListContainer;
import React, { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock, onAdd }) {
    const [num, setNum] = useState(1);
    const [error, setError] = useState('');
    const addItem = () => {
        resetError();
        if(validateStock(num + 1)) {
            setNum(num + 1);
        } else {
            setError('No se permiten números mayores al stock actual.')
        }
    }
    const removeItem = () => {
        resetError();
        if(validatePositive(num - 1)) {
            setNum(num - 1);
        } else {
            setError('No se permiten números negativos.')
        }
    }
    const changeItemNum = (e) => {
        resetError();
        const value = parseInt(e.target.value);
        if(value !== '' && value >= 0 && validateStock(value)) {
            setNum(parseInt(value));
        } else {
            setError('Hay un error con el valor, no puede estar vacio, ser negativo o mayor al stock actual.')
        }
    }
    const addToCart = () => {
        resetError();
        if(validatePositive(num) && validateStock(num)) {
            onAdd(num);
        }
    }

    const validateStock = (val) => {
        return val <= stock ? true : false;
    }
    const validatePositive = (val) => {
        return val >= 1 ? true : false;
    }
    const resetError = () => setError('')
    return (
        <div className="itemCountWrapper">
            <span className="text-sm text-left">Stock: { stock }</span>
            <span className="errorMessage">{ error }</span>
            <div className="itemCountInputWrapper">
                <button className="itemCountButton" onClick={removeItem}>-</button>
                <input className="itemCountInput" type="number" onChange={changeItemNum} value={num} />
                <button className="itemCountButton" onClick={addItem}>+</button>
            </div>
            <button className="itemCountAddToCart" onClick={addToCart}>Agregar al carro</button>
        </div>
    );
}

export default ItemCount;
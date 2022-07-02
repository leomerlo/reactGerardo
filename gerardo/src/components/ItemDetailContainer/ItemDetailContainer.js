import React, { useState, useEffect } from 'react'
import './ItemDetailContainer.css';
import loading from '../../assets/loading.svg';
import ItemCount from '../ItemCount/ItemCount'
import Breadcrumb from '../Breadcrumb/Breadcrumb'

const ItemDetailContainer = ({ id }) => {

    const [itemDetail, setItemDetail] = useState({});
    const [errors, setErrors] = useState('');

    useEffect(() => {
        setTimeout(() => {
            fetch('./data.json')
            .then((res) => res.json())
            .then((data) => {
                const item = data.find((e) => e.id === parseInt(id));
                if(!item) {
                    throw new Error('No se encontró el producto que buscabas.')
                }
                setItemDetail(item);
            })
            .catch((e) => {
                setErrors(e);
            })
        },2000);
    }, []);

    return (
        <>
            {
                errors !== '' ? <div className="text-center text-lg m-5">Se encontró un error. Volvé atras e intentalo de nuevo.</div> :
                
                itemDetail.name ?
                <div>
                    <div className="item-detail-breadcrumb">
                        <Breadcrumb name={ itemDetail.name } />
                    </div>
                    <div className="item-detail-wrapper flex my-8">
                        <div className="item-detail-image flex-auto w-64">
                        <img className="mx-auto" src={itemDetail.image} alt={itemDetail.name} />
                        </div>
                        <div className="item-detail-details flex-1">
                            <div className="item-detail-data-wrapper">
                                <span className="text-base my-2">{ itemDetail.name }</span>
                                <span className="uppercase my-2">{ itemDetail.brand }</span>
                                <span className="my-2 text-sm">${ itemDetail.price }</span>
                                <ItemCount stock={ itemDetail.stock } />
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <object className="mx-auto my-8 w-32" data={ loading } type="image/svg+xml" aria-label="Cargando Datos" />
                </div>
            }
        </>
    )
}

export default ItemDetailContainer
import React, { useState, useEffect } from 'react'
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({ id }) => {

    const [itemDetail, setItemDetail] = useState({});
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(true);

    const params = useParams();

    useEffect(() => {
        setTimeout(() => {
            fetch('/data.json')
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                const item = data.find((e) => e.id === parseInt(params.prodId));
                if(!item) {
                    throw new Error('No se encontró el producto que buscabas.')
                }
                setItemDetail(item);
            })
            .catch((e) => {
                setErrors(e);
            })
        },2000);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {
                errors !== '' ? <div className="text-center text-lg m-5">Se encontró un error. Volvé atras e intentalo de nuevo.</div> :
                
                loading ?
                <Loading />
                :
                <div>
                    <div className="item-detail-breadcrumb">
                        <Breadcrumb name={ itemDetail.name } />
                    </div>
                    <div className="item-detail-wrapper flex my-8">
                        <ItemDetail {...itemDetail} />
                    </div>
                </div>
            }
        </>
    )
}

export default ItemDetailContainer
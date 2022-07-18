import React, { useState, useEffect } from 'react'
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import ItemDetail from '../ItemDetail/ItemDetail'
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = ({ id }) => {

    const [itemDetail, setItemDetail] = useState({});
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(true);

    const params = useParams();

    useEffect(() => {
        try {
            const db = getFirestore();
            const productRef = doc(db, 'products', id)
            getDoc(productRef).then((snapshot) => {
                if(snapshot.exists) {
                    setLoading(false);
                    setItemDetail(snapshot);
                }
            })
        } catch (e) {
            setErrors(e);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {
                errors !== '' ? <ErrorMessage message="Se encontró un error. Volvé atras e intentalo de nuevo." /> :
                
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
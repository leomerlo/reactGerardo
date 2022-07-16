import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore';
 
function ItemListContainer() {

    let [fetchList, setFetchList] = useState([]);
    let [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    const params = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();

        const productRef = collection(db, 'products')

        getDocs(productRef).then((snapshot) => {
            setFetchList(snapshot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
            }))
            setLoading(false);
        })
    }, []);

    useEffect(() => {
        const filterListByCategory = (catId) => {
            setList(fetchList.filter((e) => e.category === catId));
        }

        if(params.catId && fetchList.length > 0) {    
            filterListByCategory(params.catId);
        } else {
            setList(fetchList);
        }

    }, [fetchList, params.catId])

    return (
        <div className="mt-8 text-center">
            { loading ?
                <Loading />
                :
                <ItemList list={list} />
            }
        </div>
    );
}

export default ItemListContainer;
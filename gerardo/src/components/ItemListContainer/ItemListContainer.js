import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';

function ItemListContainer() {

    let [fetchList, setFetchList] = useState([]);
    let [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    const params = useParams();

    useEffect(() => {
        setLoading(true);
        console.log('Fetch')
        setTimeout(() => {
            fetch('/data.json')
            .then(resp => resp.json())
            .then(data => {
                setLoading(false);
                setFetchList(data);
            })
        },2000);
    }, []);

    useEffect(() => {
        const filterListByCategory = (catId) => {
            setList(fetchList.filter((e) => e.category === catId));
            console.log('filterList - List: ', list);
        }

        if(params.catId && fetchList.length > 0) {    
            console.log('useEffectParams - Fetch: ', fetchList);
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
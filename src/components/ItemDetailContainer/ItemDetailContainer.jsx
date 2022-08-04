import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import { db } from "../../firebase/firebase";
import { doc, getDoc, collection} from "firebase/firestore";
import Progress from '../Progress/Progress';

function ItemDetailContainer() {

    const [product,setProduct]=useState({});
    const [loading,setLoading]=useState(true);
    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        const refDoc = doc(collection(db,'itemCollection'),id); 
        getDoc(refDoc)
        .then(result => {
            result.data() !== undefined && setProduct({...result.data(),id: result.id})
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    },[id]);

    return (
        <>
            {loading 
                ? <Progress />
                : Object.keys(product).length > 0 
                    ? <ItemDetail product={product} />
                    : <h1>Error</h1>
            }     
        </>
    );
}

export default ItemDetailContainer;
import React from 'react';
import {useEffect, useState} from 'react';
import { getProduct } from "../../mocks/fakeApi";
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';

function ItemDetailContainer() {

    const [product,setProduct]=useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        getProduct(detalleId)
        .then((result) => setProduct(result))
        .catch((err) => console.log(err))
    },[detalleId]);

    return (
        <>
            <ItemDetail product={product} />
        </>
    );
}

export default ItemDetailContainer;
import React from 'react';
import {useEffect, useState} from 'react';
import { getData } from "../../mocks/fakeApi";
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {

    const [productList,setProductList]=useState([]);

    useEffect(() => {
        getData
        .then((result) => setProductList(result))
    },[]);

    return (
        <>
            <ItemDetail product={productList[2]} />
        </>
    );
}

export default ItemDetailContainer;
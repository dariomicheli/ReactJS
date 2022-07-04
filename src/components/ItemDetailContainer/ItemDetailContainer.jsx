import React from 'react';
import {useEffect, useState,CSSProperties} from 'react';
import { getProduct } from "../../mocks/fakeApi";
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";

function ItemDetailContainer() {

    const [product,setProduct]=useState({});
    const[loading,setLoading]=useState(true);
    const {detalleId} = useParams();

    //css para spinner
    const override: CSSProperties = {
        display:"block",
        margin: "0 auto",
        textAlign:"center"
    }

    useEffect(() => {
        setLoading(true);
        getProduct(detalleId)
        .then((result) => setProduct(result))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    },[detalleId]);

    return (
        <main>
            {loading 
            ? <BeatLoader loading={loading} cssOverride={override} size={15} color='#36D7B7'/>
            : <ItemDetail product={product} />
            }
            
        </main>
    );
}

export default ItemDetailContainer;
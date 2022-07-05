import React from 'react';
import {useEffect, useState,CSSProperties} from 'react';
import { getProduct } from "../../mocks/fakeApi";
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";

function ItemDetailContainer() {

    const [product,setProduct]=useState({});
    const[loading,setLoading]=useState(true);
    const {id} = useParams();

    //css para spinner
    const override: CSSProperties = {
        display:"block",
        margin: "0 auto",
        textAlign:"center"
    }

    useEffect(() => {
        setLoading(true);
        getProduct(id)
        .then((result) => setProduct(result))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    },[id]);

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
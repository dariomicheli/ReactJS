import React, {useEffect, useState,CSSProperties} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";
import { db } from "../../firebase/firebase";
import { doc, getDoc, collection} from "firebase/firestore";

function ItemDetailContainer() {

    const [product,setProduct]=useState({});
    const [loading,setLoading]=useState(true);
    const {id} = useParams();

    //css para spinner
    const override: CSSProperties = {
        display:"block",
        margin: "0 auto",
        textAlign:"center"
    }

    useEffect(() => {
        setLoading(true);
        const refDoc = doc(collection(db,'itemCollection'),id); 
        getDoc(refDoc)
        .then(result => setProduct({...result.data(),id: result.id}))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    },[id]);

    return (
        <>
            {loading 
                ? <BeatLoader loading={loading} cssOverride={override} size={15} color='#36D7B7'/>
                : <ItemDetail product={product} />
            }     
        </>
    );
}

export default ItemDetailContainer;
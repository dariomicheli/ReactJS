import { useEffect, useState, CSSProperties } from 'react';
import ItemList from '../ItemList/ItemList';
import BeatLoader from "react-spinners/BeatLoader";
import './ItemListContainer.css';
import {useParams} from 'react-router-dom';
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

export default function ItemListContainer({greeting}) {
    
    const[productList,setProductList]=useState([]);
    const[loading,setLoading]=useState(true);
    const {id} = useParams();

    //css para spinner
    const override: CSSProperties = {
        display:"block",
        margin: "0 auto",
        textAlign:"center"
    }

    useEffect(()=>{
        setLoading(true);
        const itemCollection = collection(db,'itemCollection');
        let q;
        id
            ? q = query(itemCollection,where('category','==',`${id}`))
            : q = itemCollection
        getDocs(q)
        .then((result) => {
            const lista = result.docs.map(product => {
                return {
                    id: product.id,
                    ...product.data()
                }
            })
            setProductList(lista);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    },[id]);

    return(
        <>
            {loading 
            ? <BeatLoader loading={loading} cssOverride={override} size={15} color='#36D7B7'/>
            : <ItemList productList={productList}/>
            }      
        </>
    ); 
}
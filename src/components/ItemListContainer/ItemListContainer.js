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

        const q = id
            ? query(collection(db,'itemCollection'),where('category','==',id))
            : collection(db,'itemCollection');

        getDocs(q)
        .then((result) => {
            const list = result.docs.map(product => {
                return {
                    id: product.id,
                    ...product.data()
                }
            })
            setProductList(list);
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
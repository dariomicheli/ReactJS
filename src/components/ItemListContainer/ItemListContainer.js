import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Progress from '../Progress/Progress';
import {useParams} from 'react-router-dom';
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";


export default function ItemListContainer({greeting}) {
    
    const[productList,setProductList]=useState([]);
    const[loading,setLoading]=useState(true);
    const {id} = useParams();

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
                ? <Progress />
                : productList.length > 0 
                    ? <ItemList productList={productList}/>
                    : <h1>Error</h1>
            }      
        </>
    ); 
}
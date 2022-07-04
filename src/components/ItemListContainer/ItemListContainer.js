import { useEffect, useState, CSSProperties } from 'react';
import { getProducts } from '../../mocks/fakeApi';
import ItemList from '../ItemList/ItemList';
import BeatLoader from "react-spinners/BeatLoader";
import './ItemListContainer.css';
import {useParams} from 'react-router-dom';

export default function ItemListContainer({greeting}) {

    const[productList,setProductList]=useState([]);
    const[loading,setLoading]=useState(true);

    const {categoryId} = useParams();

    //css para spinner
    const override: CSSProperties = {
        display:"block",
        margin: "0 auto",
        textAlign:"center"
    }
    
    //funcion creada para pasar como prop en componente ItemCount
/*     const onAdd = (amount) => {
        alert(`Se agregaron ${amount} items al carrito`);
    } */

    useEffect(()=>{
        setLoading(true);
        getProducts(categoryId)
        .then((result)=>setProductList(result))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    },[categoryId]);

    return(
        <main>
            {loading 
            ? <BeatLoader loading={loading} cssOverride={override} size={15} color='#36D7B7'/>
            : <ItemList productList={productList}/>
            }      
        </main>
    ); 
}
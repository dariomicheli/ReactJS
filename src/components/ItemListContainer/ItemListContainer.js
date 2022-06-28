import { useEffect, useState, CSSProperties } from 'react';
import { getData } from '../../mocks/fakeApi';
import ItemList from '../ItemList/ItemList';
import BeatLoader from "react-spinners/BeatLoader";

export default function ItemListContainer({greeting}) {
    //funcion creada para pasar como prop en componente ItemCount
    const[productList,setProductList]=useState([]);
    const[loading,setLoading]=useState(true);

    //css para spinner
    const override: CSSProperties = {
        display:"block",
        margin: "0 auto",
        textAlign:"center"
    }
    
/*     const onAdd = (amount) => {
        alert(`Se agregaron ${amount} items al carrito`);
    } */

    useEffect(()=>{
        getData
        .then((result)=>setProductList(result))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    },[]);

    return(
        <>
            <BeatLoader loading={loading} cssOverride={override} size={15} color='#36D7B7'/>
            <ItemList productList={productList}/>
        </>
    ); 
}
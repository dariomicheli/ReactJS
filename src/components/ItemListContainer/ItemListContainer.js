import { useEffect, useState } from 'react';
import { getData } from '../../mocks/fakeApi';
import ItemList from '../ItemList/ItemList';

export default function ItemListContainer({greeting}) {
    //funcion creada para pasar como prop en componente ItemCount
    const[productList,setProductList]=useState([]);
    const[loading,setLoading]=useState(true);
    
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
            {loading ? <p>Cargando...</p> : <ItemList productList={productList}/>}
        </>
    ); 
}
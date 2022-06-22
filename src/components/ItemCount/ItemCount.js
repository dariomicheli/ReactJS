import {useState} from 'react';
import './ItemCount.css';

function ItemCount({stock,initial,onAdd}) {
    
    const [cantidad,setCantidad] = useState(parseInt(initial));
    
    const incrementar = () => {
        if (cantidad < stock) setCantidad(cantidad + 1);
    }

    const decrementar = () => {
        if (cantidad > initial) setCantidad(cantidad - 1);
    }

    const agregar = () => {
        if (stock>0) onAdd(cantidad);
    }

    return (
        <div className='itemContainer'>
            <h2>Articulo</h2>
            <div className='itemAmount'>
                <button className='itemBtn' onClick={decrementar}>-</button>
                <span>{cantidad}</span>
                <button className='itemBtn' onClick={incrementar}>+</button>
            </div>
            <button onClick={agregar}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;
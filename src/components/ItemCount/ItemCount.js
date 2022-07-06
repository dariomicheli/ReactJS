import {useState} from 'react';
import './ItemCount.css';

function ItemCount({stock,initial,onAdd}) {
    
    const [amount,setAmount] = useState(initial);

    return (
        <div className='itemContainer'>
            <div className='itemAmount'>
                <button className='itemBtn' disabled={amount<=1} onClick={()=>setAmount(amount - 1)}>-</button>
                <span>{amount}</span>
                <button className='itemBtn' disabled={amount>=stock} onClick={()=>setAmount(amount + 1)}>+</button>
            </div>
            <button className='itemContainer-btn' disabled={stock<=0} onClick={()=>onAdd(amount)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;
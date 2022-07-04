import {useState} from 'react';
import './ItemCount.css';

function ItemCount({stock,initial,onAdd}) {
    
    const [amount,setAmount] = useState(initial);
    
    const handleValue = (value) => {     
        if(value>0){
            if (amount < stock) setAmount(amount + value);
        }else{
            if (amount > initial) setAmount(amount + value);
        }  
    }

    const handleAdd = () => {
        if (stock>0) onAdd(amount);
    }

    return (
        <div className='itemContainer'>
            <div className='itemAmount'>
                <button className='itemBtn' onClick={()=>handleValue(-1)}>-</button>
                <span>{amount}</span>
                <button className='itemBtn' onClick={()=>handleValue(1)}>+</button>
            </div>
            <button className='itemContainer-btn' onClick={handleAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;
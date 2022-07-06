import React from 'react';
import {useState} from 'react';
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import {Link} from 'react-router-dom';

function ItemDetail({product}) {
    const {name,price,description,stock,pictureUrl} = product;
    const [cart,setCart] = useState(false);

    //funcion creada para pasar como prop en componente ItemCount
    const onAdd = (amount) => {
        alert(`Se agregaron ${amount} items al carrito`);
        setCart(!cart);
    }
    
    return (
        <div className='detail-container'>
            <div className='detail-img'>
                <img src={pictureUrl} alt={name}/>
            </div>
            <div className='detail-body'>
                <h2>{name}</h2>
                <span>${price}</span>
                <p>{description}</p>
                <p>Stock disponible: {stock}</p>
                {
                    cart 
                    ? <Link to="/cart" className="detail-btn">Finalizar compra</Link>
                    : <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                }
                
            </div>        
        </div>
    );
}

export default ItemDetail;
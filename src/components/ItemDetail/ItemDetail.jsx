import React, {useState, useContext}  from 'react';
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import {Link} from 'react-router-dom';
import {CartContext} from '../../context/CartContext';

function ItemDetail({product}) {
    const {name,price,description,stock,pictureUrl} = product;
    const [cart,setCart] = useState(false);
    const {addItem} = useContext(CartContext);

    const onAdd = (amount) => {
        setCart(!cart);
        addItem(product,amount);
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
                    ? <Link to="/cart" className="detail-btn">Ir al Carrito</Link>
                    : <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                }                
            </div>        
        </div>
    );
}

export default ItemDetail;
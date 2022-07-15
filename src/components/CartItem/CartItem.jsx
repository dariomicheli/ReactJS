import React, { useContext } from 'react';
import {CartContext} from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({product}) => {
    const {name,quantity,price,pictureUrl} = product;
    const {removeItem} = useContext(CartContext);
    return (
        <div className='cartItem-container'>
            <div className='cartItem-imgContainer'>
                <img src={pictureUrl} alt={name} className='cartItem-img' />
            </div>
            <span className='cartItem-name'>{name}</span>
            <span className='cartItem-quantity'>{quantity}</span>
            <span className='cartItem-price'>${price}</span>
            <button className='cartItem-btnDelete' onClick={() => removeItem(product.id)}>Eliminar</button>
        </div>
    )
}

export default CartItem;
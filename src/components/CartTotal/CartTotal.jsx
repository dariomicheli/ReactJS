import React, {useContext} from "react";
import "./CartTotal.css";
import {Link} from 'react-router-dom';
import {CartContext} from '../../context/CartContext';

const CartTotal = () => {
    const {totalPriceCart} = useContext(CartContext);
    const total=totalPriceCart();
    return(
        <div className='cartTotal-container'>
            <div className='cartTotal-amount'>
                <div className='cartTotal-subtotal'>
                    <span>Subtotal</span>
                    <span>${total}</span>
                </div>
                <div className='cartTotal-total'>
                    <span>Total</span>
                    <span>${total}</span>
                </div>
            </div>
            <div className='cartTotal-btns'>
                <Link to='' className='cartTotal-btnFinalizarCompra'>Finalizar Compra</Link>
                <Link to='/' className='cartTotal-btnContinuarComprando'>Continuar Comprando</Link>
            </div>
        </div>
    ) 
};

export default CartTotal;

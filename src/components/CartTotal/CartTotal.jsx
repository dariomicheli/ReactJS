import React from "react";
import "./CartTotal.css";

const CartTotal = () => {
    return(
        <div className='cartTotal-container'>
            <div className='cartTotal-subtotal'>
                <span>Subtotal</span>
                <span>$12000</span>
            </div>
            <div className='cartTotal-total'>
                <span>Total</span>
                <span>$12000</span>
            </div>
            <button className='cartTotal-btnFinalizarCompra'>Finalizar Compra</button>
            <button className='cartTotal-btnContinuarComprando'>Continuar Comprando</button>
        </div>
    ) 
};

export default CartTotal;

import React from "react";
import "./CartContainer.css";
import CartList from '../CartList/CartList';
import CartTotal from '../CartTotal/CartTotal';

const CartContainer = () => {
    return (
    <>
        <h2 className='cart-title'>Mi Carrito</h2>
        <div className='cart-container'>
            <CartList />
            <CartTotal />
        </div>
    </>
)};

export default CartContainer;

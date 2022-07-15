import React, { useContext } from 'react';
import {CartContext} from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import "./CartList.css";

const CartList = () => {

  const {cartProducts} = useContext(CartContext);

  return (
    <>
      <div className='cartList-container'>
        {
          cartProducts.map((product) => 
            <CartItem key={product.id} product={product}/>
          )
        }
      </div>
    </>
  )
}

export default CartList;
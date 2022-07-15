import React, { useContext } from 'react';
import {CartContext} from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import "./CartList.css";

const CartList = () => {

  const {cartProducts,clear} = useContext(CartContext);

  return (
    <main>
      <h2 className='cartList-title'>Mi Carrito</h2>
      <div className='cartList-container'>
        {
          cartProducts.map((product) => 
            <CartItem key={product.id} product={product}/>
          )
        }
      </div>
      <div>
        Total
      </div>
      <button onClick={clear}>Borrar Todo</button>
    </main>
  )
}

export default CartList;
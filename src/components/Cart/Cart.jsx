import React, { useContext } from 'react';
import {CartContext} from '../../context/CartContext';

const Cart = () => {

  const {cartProducts,clear} = useContext(CartContext);

  return (
    <main>
      {
        cartProducts.map((product) => 
        <p key={product.id}>Producto: {product.name} Cantidad: {product.quantity}</p>
        )
      }
      <button onClick={clear}>Borrar Todo</button>
    </main>
  )
}

export default Cart;
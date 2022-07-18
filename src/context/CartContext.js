import React, { useState, createContext} from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([]);   
    
    const addItem = (item,quantity) => {
        if (isInCart(item.id)) {
            const updateCartProducts = [...cartProducts];
            const searchIindex = updateCartProducts.findIndex(product => product.id === item.id);
            updateCartProducts[searchIindex].quantity += quantity;
            setCartProducts(updateCartProducts);
        }else{
            const newCartProduct = {...item, quantity: quantity};
            setCartProducts([...cartProducts,newCartProduct]);
        }
    }

    const removeItem = (itemId) => {
        setCartProducts(cartProducts.filter((product) => product.id !== itemId));        
    }

    const clear = () => {
        setCartProducts([]);
    }
    
    const isInCart = (id) =>{
        return cartProducts.some((item) => item.id === id);
    }

    const amountCartProducts = () => {
        let cantidad = 0;
        cartProducts.forEach(element => {
            cantidad += element.quantity;
        });
        return cantidad;
    }

    const totalPriceCart = () => {
        return cartProducts.reduce((acc,product) => acc + product.quantity*product.price,0);
    }

    return (
        <CartContext.Provider value={{cartProducts,addItem,removeItem,clear,amountCartProducts,totalPriceCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
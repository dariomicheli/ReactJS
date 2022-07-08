import React, {useState, createContext} from 'react';

export const CartContext = createContext();

const CartProvider = ({defaultValue = [], children}) => {

    const [cartProducts, setCartProducts] = useState([{
        id:2,
        name:'Llave Gris',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget.',
        category:'zapatos',
        pictureUrl:'https://viamo.vteximg.com.br/arquivos/ids/256572-526-672/VC07484CD022.jpg?v=637916042782530000',
        stock:10,
        price:500
    }]);
    
    const addItem = (item,quantity) => {
        //hacer un setproducts con usuario y spread PERO validando q el producto no exista
        console.log(cartProducts);
        item.quantity = quantity;
        console.log(item);
        if (isInCart(item.id)) {
            const updateProduct = [...cartProducts];
            console.log(updateProduct);
        } 
    }

    const removeItem = (itemId) => {
        //eliminar con un metodo filter
    }

    const clear = () => {
        setCartProducts([]);
    }
    
    const isInCart = (id) =>{
        return cartProducts.some((item) => item.id === id);
    }

    //Obtener cantidad con foreach 
    return (
        <CartContext.Provider value={{cartProducts,addItem,removeItem,clear,isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
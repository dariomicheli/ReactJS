import './CartResume.css';
import Divider from '@mui/material/Divider';
import {CartContext} from '../../context/CartContext';
import {useContext} from "react";


const CartResume = () => {

    const {cartProducts,total} = useContext(CartContext);

    return (
        <div className="cartResume-container">
            <h3>Resumen de compra</h3>
            <Divider />
            {cartProducts.map((product,index) => (
                <div className='cartResumeItem-card' key={index}>
                    <div className='cartResumeItem-imgContainer'>
                        <img src={product.pictureUrl} alt={product.name} className='cartResumeItem-img' />
                    </div>
                    <div>
                        <span className='cartResumeItem-name'>{product.name}</span>
                        <span className='cartResumeItem-quantity'>X {product.quantity}</span>
                    </div>
                    <span className='cartResumeItem-price'>${product.price}</span>
                </div>
            ))}
            <Divider />
            <div className="cartResume-total">
                <span>Total</span>
                <span>${total}</span>
            </div>
        </div>
    )
}

export default CartResume;
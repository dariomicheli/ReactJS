import {useContext} from "react";
import "./CartTotal.css";
import {useNavigate} from 'react-router-dom';
import {CartContext} from '../../context/CartContext';
import Button from '@mui/material/Button';
import {formatNumber} from '../../utils/formatNumber';

const CartTotal = () => {

    const {total} = useContext(CartContext);
    const navigate=useNavigate();

    const handleFinalizarCompra = () => navigate('/checkout')
    const handleContinuarCompra = () => navigate('/')

    return(
        <div className='cartTotal-container'>
            <div className='cartTotal-amount'>
                <div className='cartTotal-subtotal'>
                    <span>Subtotal</span>
                    <span>${formatNumber(total)}</span>
                </div>
                <div className='cartTotal-total'>
                    <span>Total</span>
                    <span>${formatNumber(total)}</span>
                </div>
            </div>
            <div className='cartTotal-btns'>
                <Button variant="contained" color="success" onClick={handleFinalizarCompra}>Finalizar Compra</Button>
                <Button variant="outlined" onClick={handleContinuarCompra}>Continuar Comprando</Button>
            </div>
        </div>
    ) 
};

export default CartTotal;

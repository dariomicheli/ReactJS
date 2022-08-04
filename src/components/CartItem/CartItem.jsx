import { useContext } from 'react';
import {CartContext} from '../../context/CartContext';
import './CartItem.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

const CartItem = ({product}) => {
    const {name,quantity,price,pictureUrl} = product;
    const {removeItem} = useContext(CartContext);
    return (
        <div className='cartItem-container'>
            <div className='cartItem-imgContainer'>
                <img src={pictureUrl} alt={name} className='cartItem-img' />
            </div>
            <span className='cartItem-name'>{name}</span>
            <span className='cartItem-quantity'>{quantity}</span>
            <span className='cartItem-price'>${price}</span>
            <Tooltip title="Eliminar">
                <IconButton aria-label="eliminar" onClick={() => removeItem(product.id)}>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </div>
    )
}

export default CartItem;
import { useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import './CartItem.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {formatNumber} from '../../utils/formatNumber';



const CartItem = ({product}) => {
    const {name,quantity,price,pictureUrl,stock} = product;
    const {removeItem,addItem} = useContext(CartContext);

    const handleClickAdd = () => {
        addItem(product,1);
    }

     const handleClickRemove = () => {
        addItem(product,-1);
    }

    return (
        <div className='cartItem-container'>
            <div className='cartItem-imgContainer'>
                <img src={pictureUrl} alt={name} className='cartItem-img' />
            </div>
            <span className='cartItem-name'>{name}</span>
            <Stack direction="row" alignItems="center">
                <Tooltip title="Quitar">
                    <span>
                        <IconButton 
                        disabled={quantity<=1}
                        onClick={handleClickRemove}
                        color="primary"
                        >
                            <RemoveCircleOutlineIcon />
                        </IconButton>
                    </span>
                </Tooltip>
                <span className='cartItem-quantity'>{quantity}</span>
                <Tooltip title="Agregar">
                    <span>
                        <IconButton
                        disabled={quantity>=stock} 
                        onClick={handleClickAdd}
                        color="primary"
                        >
                            <AddCircleOutlineIcon />
                        </IconButton>
                    </span>
                </Tooltip>
            </Stack>
            <span className='cartItem-price'>${formatNumber(price)}</span>
            <Tooltip title="Eliminar">
                <IconButton aria-label="eliminar" onClick={() => removeItem(product.id)}>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </div>
    )
}

export default CartItem;
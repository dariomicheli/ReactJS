import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';

export default function CartWidget() {

    const {quantity} = useContext(CartContext);

    return (
        <div className='shoppingCart'>
            <Link to='/cart'>
                <ShoppingCartIcon/>
            </Link>
            {
                (quantity > 0) && <span>{quantity}</span> 
            } 
            
        </div>
    );
}

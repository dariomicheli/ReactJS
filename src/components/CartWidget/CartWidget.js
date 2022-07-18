import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';

export default function CartWidget() {

    const {amountCartProducts} = useContext(CartContext);
    const qty=amountCartProducts();

    return (
        <div className='shoppingCart'>
            <Link to='/cart'>
                <ShoppingCartIcon/>
            </Link>
            {
                (qty > 0) && <span>{qty}</span> 
            } 
            
        </div>
    );
}

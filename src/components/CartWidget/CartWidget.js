import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';
import {Link} from 'react-router-dom';

export default function CartWidget() {
    return (
        <div className='shoppingCart'>
            <Link to='/cart'>
                <ShoppingCartIcon/>
            </Link> 
            <span>5</span> 
        </div>
    );
}

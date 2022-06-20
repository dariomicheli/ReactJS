import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';

export default function CartWidget() {
    return (
        <div className='shoppingCart'>
            <button>
                <ShoppingCartIcon htmlColor='#fbfcff'/>
            </button> 
            <span>5</span> 
        </div>
    );
}

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';

export default function CartWidget() {
    return (
        <div className='shoppingCart'>
            <a href='/'><ShoppingCartIcon htmlColor='#fbfcff'/></a> 
            <span>8</span> 
        </div>
    );
}

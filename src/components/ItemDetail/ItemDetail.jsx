import React,{useContext,useState}  from 'react';
import {useNavigate} from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import {CartContext} from '../../context/CartContext';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import {formatNumber} from '../../utils/formatNumber';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ItemDetail({product}) {
    const {name,price,description,stock,pictureUrl} = product;
    const navigate=useNavigate();
    const {addItem} = useContext(CartContext);
    const [cart,setCart] = useState(false);
    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });

    const {open,vertical,horizontal} = state;

    const onAdd = (amount) => {
        addItem(product,amount);
        setState({...state,open:true});
        setCart(!cart);
    }

    const buyItems = (amount) => {
        addItem(product,amount);
        navigate('/cart');
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setState({...state,open:false});
    };
    
    return (
        <>
            <div className='detail-container'>
                <div className='detail-img'>
                    <img src={pictureUrl} alt={name}/>
                </div>
                <div className='detail-body'>
                    <h2 className="detail-name">{name}</h2>
                    <p className="detail-description">{description}</p>
                    <span className="detail-price">${formatNumber(price)}</span>
                    {cart 
                        ? (
                            <>
                                <Button variant="contained" color="success"onClick={()=> navigate('/cart')}>Ir al Carrito</Button>
                                <Button variant="outlined" onClick={()=> navigate('/')}>Continuar comprando</Button>
                            </>
                        )
                        : <ItemCount stock={stock} onAdd={onAdd} buyItems={buyItems}/>}              
                </div>       
            </div>
            <Snackbar 
            anchorOrigin={{ vertical, horizontal }}
            open={open} 
            autoHideDuration={4000} 
            onClose={handleClose}
            key={vertical + horizontal}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Agregado al carrito!
                </Alert>
            </Snackbar> 
        </>
    );
}

export default ItemDetail;
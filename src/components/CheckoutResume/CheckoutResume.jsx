import { Link } from 'react-router-dom';
import './CheckoutResume.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';


const CheckoutResume = ({orderId}) => {
    return (
        <div className="checkoutResume-container">
            <Stack direction="row" spacing={1}  justifyContent="center" alignItems="center">
                <CheckCircleOutlineIcon color="success" sx={{fontSize:50}}/>
                <h2>¡Gracias por su compra!</h2>
            </Stack>
            <p>Su id de compra es: <span>{orderId}</span></p>
            <Link to='/'>Ir al inicio</Link>
        </div>
    )
}

export default CheckoutResume;
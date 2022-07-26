import { useContext  } from 'react';
import { CartContext } from '../../context/CartContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {cartProducts} = useContext(CartContext)
    
    if(cartProducts.length === 0) {
        return <Navigate to='/' />
    }

    return children
}

export default ProtectedRoute;
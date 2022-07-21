import { Link } from 'react-router-dom';

const CheckoutResume = ({orderId}) => {
    return (
        <>
            <h2>¡Gracias por su compra!</h2>
            <p>Su id de compra es: {orderId}</p>
            <Link to='/'>Ir al inicio</Link>
        </>
    )
}

export default CheckoutResume;
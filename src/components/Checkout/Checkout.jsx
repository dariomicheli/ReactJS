import './Checkout.css';
import { useState, useContext } from 'react';
import {CartContext} from '../../context/CartContext';
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import CheckoutResume from '../CheckoutResume/CheckoutResume';
import {Navigate} from 'react-router-dom';
import CartResume from '../CartResume/CartResume';
import Stack from '@mui/material/Stack';
import { useAuth } from '../../context/AuthContext';

const Checkout = () => {
    const {user}= useAuth();
    const [loading,setLoading] = useState(false);
    const {cartProducts,total,clear} = useContext(CartContext);
    const [orderId, setOrderId] = useState('');
    const [buyer, setBuyer] = useState({
        email: user.email,
        name: '',
        surname: '',
        phone: ''
    });

    const handleChange = ({name,value}) =>
        setBuyer({...buyer, [name]:value});

    const handleSubmit = e => {
        setLoading(true);
        e.preventDefault();
        sendOrder();
    }
        
    const sendOrder = () => {
        const ordersCollection = collection (db, 'orders');
        addDoc(ordersCollection,{
            buyer,
            items: cartProducts,
            date: serverTimestamp(),
            total
        })
        .then(({id}) => setOrderId(id))
        .then(() => updateStock())
        .then(() => setLoading(false))
        .catch( err => console.log(err))
        .finally(() => clear())
    }

    const updateStock = () => {
        cartProducts.forEach(product => {
            const productDoc = doc(db,"itemCollection",product.id);
            updateDoc(productDoc, {stock: product.stock - product.quantity});
        });
    }


    if(cartProducts.length === 0 && orderId === '') return <Navigate to='/' />

    return (
        <>
            {orderId===''
                ? (
                    <>
                        <h2>Finalizar la Compra</h2> 
                        <Stack direction="row" spacing={2} justifyContent="space-between">
                            <CheckoutForm handleSubmit={handleSubmit} handleChange={handleChange} loading={loading}/> 
                            <CartResume />
                        </Stack>
                    </>
                )
                : <CheckoutResume orderId={orderId} />
            }
        </>
    )
}

export default Checkout;
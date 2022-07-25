import './Checkout.css';
import { useState, useContext } from 'react';
import {CartContext} from '../../context/CartContext';
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import CheckoutResume from '../CheckoutResume/CheckoutResume';

const Checkout = () => {

    const {cartProducts,total,clear} = useContext(CartContext);
    const [orderId, setOrderId] = useState('');
    const [user, setUser] = useState({
        email: '',
        name: '',
        surname: '',
        phone: ''
    });

    const handleChange = ({name,value}) =>
        setUser({...user, [name]:value});

    const handleSubmit = e => {
        e.preventDefault();
        sendOrder();
    }
        
    const sendOrder = () => {
        const ordersCollection = collection (db, 'orders');
        addDoc(ordersCollection,{
            user,
            items: cartProducts,
            date: serverTimestamp(),
            total
        })
        .then(({id}) => setOrderId(id))
        .then(() => updateStock())
        .catch( err => console.log(err))
        .finally(() => clear())
    }

    const updateStock = () => {
        cartProducts.forEach(product => {
            const productDoc = doc(db,"itemCollection",product.id);
            updateDoc(productDoc, {stock: product.stock - product.quantity});
        });
    }

    return (
        <>
            {orderId===''
                ? <CheckoutForm handleSubmit={handleSubmit} handleChange={handleChange} sendOrder={sendOrder} /> 
                : <CheckoutResume orderId={orderId} />
            }
        </>
    )
}

export default Checkout;
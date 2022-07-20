import './Checkout.css';
import { useState, useContext } from 'react';
import {CartContext} from '../../context/CartContext';
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Checkout = () => {
    const {cartProducts,total} = useContext(CartContext);
    const [orderId, setOrderId] = useState('');
    const [user, setUser] = useState({
        email: '',
        name: '',
        surname: '',
        phone: ''
    });

    const handleChange = ({target: {name,value}}) =>{
        setUser({...user, [name]:value});
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    const sendOrder = () => {
        const ordersCollection = collection (db, 'orders');
        addDoc(ordersCollection,{
            user,
            items: cartProducts,
            date: serverTimestamp(),
            total
        })
        .then(({id}) => setOrderId(id));
    }

    return (
        <>
            <h2>Finalizar la Compra</h2>

            <div>
                <h3>Datos Personales</h3>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Correo</label>
                    <input type="email" name="email" id="email" required onChange={handleChange}/>

                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" id="name" required onChange={handleChange}/>

                    <label htmlFor="surname">Apellido</label>
                    <input type="text" name="surname" id="surname" required onChange={handleChange}/>

                    <label htmlFor="phone">Teléfono / Móvil</label>
                    <input type="tel" name="phone" id="phone" required onChange={handleChange}/>

                    <input type="submit" value="Continuar" onClick={sendOrder}/>
                </form>
            </div>
        </>
    )
}

export default Checkout;
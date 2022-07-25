import './MenuItems.css';
import {NavLink} from 'react-router-dom';
import { db } from "../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState } from 'react';

export default function MenuItems() {

    const [items, setItems] = useState([])

    const categoriesCollection = collection(db,'categories');
    getDocs(categoriesCollection)
    .then(result => {
        const list = result.docs.map(categorie => {
            return {
                id: categorie.id,
                ...categorie.data()
            }
        })
        setItems(list);
    })
    .catch(err => console.log(err))

    return (
        <nav className="menuItems">
            <NavLink to="/" key={0}>Home</NavLink>
            {items.map((item) => (
                <NavLink to={`/categoria/${item.key}`} key={item.id}>{item.description}</NavLink>
            ))}
        </nav>
    )
}


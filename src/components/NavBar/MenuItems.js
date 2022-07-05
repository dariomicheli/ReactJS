import './MenuItems.css';
import {NavLink} from 'react-router-dom';

const items = [
    {
        id:1,
        name:"Home",
        path:"/"
    },
    {
        id:2,
        name:"Zapatos",
        path:"/categoria/zapatos"
    },
    {
        id:3,
        name:"Zapatillas",
        path:"/categoria/zapatillas"
    },
    {
        id:4,
        name:"Botas",
        path:"/categoria/botas"
    }
];

export default function MenuItems() {
    return (
        <nav className="menuItems">
            {items.map((item) => (
                <NavLink to={item.path} key={item.id}>{item.name}</NavLink>
            ))}
        </nav>
    )
}


import './MenuItems.css';
import {NavLink} from 'react-router-dom';

const items = [
    {
        id:1,
        name:"Zapatos",
        path:"/categoria/zapatos"
    },
    {
        id:2,
        name:"Zapatillas",
        path:"/categoria/zapatillas"
    },
    {
        id:3,
        name:"Botas",
        path:"/categoria/botas"
    },
    {
        id:4,
        name:"Ver todo",
        path:"/"
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


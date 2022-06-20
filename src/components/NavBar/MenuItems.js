import './MenuItems.css';

const items = [
    {
        name:"Categoria 1",
        url:"/"
    },
    {
        name:"Categoria 2",
        url:"/"
    },
    {
        name:"Categoria 3",
        url:"/"
    }
];

export default function MenuItems() {
    return (
        <nav className="menuItems">
            {items.map((item,index) => (
                <a href={item.url} key={index}>{item.name}</a>
            ))}
        </nav>
    )
}


import ItemCount from '../ItemCount/ItemCount';

export default function ItemListContainer({greeting}) {
    const onAdd = (cantidad) => {
        alert(`Se agregaron ${cantidad} items al carrito`);
    }
    
    return(
        <>
            <div>{greeting}</div>
            <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </>
    ); 
}
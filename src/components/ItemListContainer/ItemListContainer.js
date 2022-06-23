import ItemCount from '../ItemCount/ItemCount';

export default function ItemListContainer({greeting}) {
    const onAdd = (amount) => {
        alert(`Se agregaron ${amount} items al carrito`);
    }
    
    return(
        <>
            <div>{greeting}</div>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    ); 
}
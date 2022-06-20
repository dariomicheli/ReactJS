function ItemCount({stock,initial,onAdd}) {
    let cantidad = initial;
    
    const incrementar = () => {
        if (cantidad < stock) {
            cantidad++;
            document.getElementById('inputCantidad').value=cantidad;
        }else{
            alert("Se ha alcanzado el maximo stock");
            document.getElementById('incrementar-btn').disabled=true;
        }
    };

    return (
        <>
            
            <span>Articulo</span>
            <button>-</button>
            <input type="text" id="inputCantidad" value={initial}></input>
            <button onClick={incrementar} id="incrementar-btn">+</button>
            <button onClick={onAdd}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount
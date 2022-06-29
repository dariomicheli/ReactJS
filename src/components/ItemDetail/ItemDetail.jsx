import React from 'react';

function ItemDetail({product}) {
    const {pictureUrl,name,price,description,stock} = product;

    return (
        <div>
            <img src={pictureUrl} alt={name} />
            <div>
                <h2>{name}</h2>
                <span>${price}</span>
                <p>{description}</p>
                <p>Stock disponible: {stock}</p>
            </div>
            <button>Comprar</button>
        </div>
    );
}

export default ItemDetail;
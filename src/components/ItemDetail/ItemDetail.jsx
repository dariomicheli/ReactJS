import React from 'react';
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({product}) {
    const {name,price,description,stock,pictureUrl} = product;

    return (
        <div className='detail-container'>
            <img src={pictureUrl} alt={name} className='detail-img'/>
            <div className='detail-body'>
                <h2>{name}</h2>
                <span>${price}</span>
                <p>{description}</p>
                <p>Stock disponible: {stock}</p>
                <ItemCount stock={stock} initial={1}/>
            </div>
                
        </div>
    );
}

export default ItemDetail;
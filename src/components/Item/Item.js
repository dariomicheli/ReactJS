import React from 'react'
import './Item.css';

function Item({product}) {
  const {name,pictureUrl,price}=product;
  return (
    <div className='card-container'>
      <img src={pictureUrl} alt={name} className='card-img'/>
      <div className='card-body'>
        <h2 className='card-name'>{name}</h2>
        <span className='card-price'>${price}</span>
      </div>
      <button className='card-btn'>Ver más</button>
    </div>
  )
}

export default Item
import React from 'react';
import './Item.css';
import {Link} from 'react-router-dom';
import {formatNumber} from '../../utils/formatNumber';

function Item({product}) {
  const {id,name,pictureUrl,price,category}=product;
  return (
    <Link to ={`/item/${id}`} style={{textDecoration:'none'}} className="item-container">
      <div className='card-container'>
        <div className='card-img'>
          <img src={pictureUrl} alt={name} />
        </div>
        <div className='card-body'>
          <h2 className='card-name'>{name}</h2>
          <span className='card-category'>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
          <span className='card-price'>${formatNumber(price)}</span>
        </div>
      </div>
    </Link>
  )
}

export default Item;
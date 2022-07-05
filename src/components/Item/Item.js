import React from 'react';
import './Item.css';
import {Link} from 'react-router-dom';

function Item({product}) {
  const {id,name,pictureUrl,price}=product;
  return (
    <Link to ={`/item/${id}`} style={{textDecoration:'none'}}>
      <div className='card-container'>
        <img src={pictureUrl} alt={name} className='card-img'/>
        <div className='card-body'>
          <h2 className='card-name'>{name}</h2>
          <span className='card-price'>${price}</span>
        </div>
        {/*<Link to={`/detalle/${id}`} className='card-btn'>Ver más</Link>*/}
      </div>
    </Link>
  )
}

export default Item;
import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

function ItemList({productList}) {
  return (
    <div className='products-container'>
        {productList.map((product)=><Item key={product.id} product={product}/>)}
    </div>
  );
}

export default ItemList;
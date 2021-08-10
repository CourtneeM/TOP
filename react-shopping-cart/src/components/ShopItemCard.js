import React, { useState } from 'react';

import '../styles/shopItemCard/shopItemCard.css';

function ItemCard(props) {
  const [itemCount, setItemCount] = useState(0);
  const {items, itemName } = props;

  const incrementItemCount = () => setItemCount(itemCount + 1);
  
  const decrementItemCount = () => {
    if (itemCount <= 0) return;
    setItemCount(itemCount - 1);
  }

  const addItemToCart = () => {
    if (itemCount <= 0) return;

    props.addItemToCart(itemName, itemCount);
    setItemCount(0);
  }

  return (
    <div className='item-card'>
      <p className='item-name'>{itemName}</p>
      <p className='item-price'>${items[itemName].price}</p>
      <div className='adjust-quantity-container'>
        <button onClick={() => decrementItemCount()} className='quantity-btn'>-</button>
        <input
          type="number"
          min={0}
          value={itemCount}
          onChange={e => setItemCount(e.target.value)}
          className='quantity-input'
        />
        <button onClick={() => incrementItemCount()} className='quantity-btn'>+</button>
      </div>
      <button onClick={() => addItemToCart(itemName)} className='add-cart-btn'>Add to Cart</button>
    </div>
  );
}

export default ItemCard;

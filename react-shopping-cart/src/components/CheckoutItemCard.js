import React, { useEffect, useState } from 'react';

import '../styles/checkoutItemCard/checkoutItemCard.css';

function CheckoutItemCard({item, index, changeQuantity, removeItemFromCart}) {
  const itemName = Object.keys(item)[0];
  const {price, quantity} = {...item[itemName]};

  const [inputQuantity, setInputQuantity] = useState(quantity)

  useEffect(() => {
      setInputQuantity(quantity);
  }, [quantity])

  return (
    <div className='checkout-item-card'>
      <p className='checkout-item-name'>{itemName} x</p>
      <input type="number" min={1} value={inputQuantity} onChange={e => setInputQuantity(e.target.value)} className='checkout-item-input' />

      <div className='price-container'>
        <p className='quantity-price'>${(price * quantity).toFixed(2)}</p>
        <p className='price-per-item'>(${price} each)</p>
      </div>

      <div className='edit-item-container'>
        <button onClick={() => changeQuantity(inputQuantity, itemName, index)}>change quantity</button>
        <button onClick={index => removeItemFromCart(index)}>remove item</button>
      </div>
    </div>
  );
}

export default CheckoutItemCard;

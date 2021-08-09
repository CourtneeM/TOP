import React, { useState } from 'react';

function CheckoutItemCard({item, index, changeQuantity, removeItemFromCart}) {
  const itemName = Object.keys(item)[0];
  const {price, quantity} = {...item[itemName]};

  const [inputQuantity, setInputQuantity] = useState(quantity)

  return (
    <div>
      <p>{itemName} x</p>
      <input type="text" value={inputQuantity} onChange={e => setInputQuantity(e.target.value)} />
      <p>${price * quantity} (${price} each)</p>
      <div>
        <button onClick={() => changeQuantity(inputQuantity, itemName, index)}>change quantity</button>
        <button onClick={index => removeItemFromCart(index)}>remove item</button>
      </div>
    </div>
  );
}

export default CheckoutItemCard;

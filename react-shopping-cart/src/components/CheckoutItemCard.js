import React, { useEffect, useState } from 'react';

function CheckoutItemCard({item, index, changeQuantity, removeItemFromCart}) {
  const itemName = Object.keys(item)[0];
  const {price, quantity} = {...item[itemName]};

  const [inputQuantity, setInputQuantity] = useState(quantity)

  useEffect(() => {
      setInputQuantity(quantity);
  }, [quantity])

  return (
    <div style={styles.itemCard}>
      <p style={styles.inlineP}>{itemName} x</p>
      <input type="number" min={1} value={inputQuantity} onChange={e => setInputQuantity(e.target.value)} style={styles.input}/>
      <p>${(price * quantity).toFixed(2)} (${price} each)</p>
      <div>
        <button onClick={() => changeQuantity(inputQuantity, itemName, index)}>change quantity</button>
        <button onClick={index => removeItemFromCart(index)}>remove item</button>
      </div>
    </div>
  );
}

const styles = {
  itemCard: {
    marginBottom: '40px',
  },
  input: {
    width: '40px',
    textAlign: 'center',
  },
  inlineP: {
    display: 'inline'
  }
}

export default CheckoutItemCard;

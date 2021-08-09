import React, { useState } from 'react';

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
    <div style={styles.itemCard}>
      <p>{itemName}</p>
      <p>${items[itemName].price}</p>
      <div className="adjust-quantity-container" style={styles.adjustQuantityContainer}>
        <button onClick={() => decrementItemCount()}>-</button>
        <input
          type="text"
          value={itemCount}
          onChange={e => setItemCount(e.target.value)}
          style={styles.quantityInput}
        />
        <button onClick={() => incrementItemCount()}>+</button>
      </div>
      <button onClick={() => addItemToCart(itemName)}>Add to Cart</button>
    </div>
  );
}

const styles = {
  itemCard: {
    width: '150px',
    textAlign: 'center',
    border: '1px solid #000',
  },
  adjustQuantityContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityInput: {
    width: '32px',
    textAlign: 'center',
  }
}

export default ItemCard;

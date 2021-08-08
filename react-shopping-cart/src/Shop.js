import React, { useState } from 'react';
import Navbar from './components/Navbar';

function Shop() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  
  const items = {
                  'ice': {id: 1, price: 0.99},
                  'bread': {id: 2, price: 1.99},
                  'cookies': {id: 3, price: 4.99},
                  'dragon fruit': {id: 4, price: 6.99},
                  'eggs': {id: 5, price: 1.99},
                  'french toast': {id: 6, price: 2.99},
                  'green onions': {id: 7, price: 1.99}
                };

  const displayItems = () =>{
    return (
      <div style={styles.items}>
        {
          Object.keys(items).map(itemName => {
            return (
              <div style={styles.itemCard}>
                <p>{itemName}</p>
                <p>${items[itemName].price}</p>
                <div className="adjust-quantity-container" style={styles.adjustQuantityContainer}>
                  <button onClick={() => removeItemFromCart(itemName)}>-</button>
                  <p>[ item count ]</p>
                  <button onClick={() => addItemToCart(itemName)}>+</button>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }

  const addItemToCart = (itemName) => {
    const cartCopy = [...cart];
    cartCopy.push({[itemName]: items[itemName]});

    setCart(cartCopy);
    incrementCart();
  }

  const removeItemFromCart = (itemName) => {
    const itemNames = cart.map(itemObj => Object.keys(itemObj)[0]);
    const index = itemNames.indexOf(itemName);

    if (index === -1) return;

    const cartCopy = [...cart];
    cartCopy.splice(index, 1);

    setCart(cartCopy);
    decrementCart();
  }

  const incrementCart = () => setCartCount(cartCount + 1);
  const decrementCart = () => setCartCount(cartCount - 1);

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <h1>Shop</h1>
      { displayItems() }
    </div>
  );
}

const styles = {
  items: {
    display: 'flex',
    justifyContent: 'center',
  },
  itemCard: {
    width: '150px',
    textAlign: 'center',
    border: '1px solid #000',
  },
  adjustQuantityContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export default Shop;

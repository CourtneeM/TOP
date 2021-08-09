import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ItemCard from './components/ItemCard';

function Shop(props) {  
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
            return <ItemCard
                      items={items}
                      itemName={itemName}
                      addItemToCart={addItemToCart}
                    />
          })
        }
      </div>
    );
  }

  const addItemToCart = (itemName, itemCount) => {
    props.addItemToCart(items, itemName, itemCount);
  }

  const removeItemFromCart = (itemName) => {
    
  }

  return (
    <div>
      <Navbar cart={props.cart} />
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
  
}

export default Shop;

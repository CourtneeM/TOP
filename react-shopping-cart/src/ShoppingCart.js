import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ShoppingCart() {
  const location = useLocation();
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    (() => {
      const newTotalCost = location.cart.reduce((accum, currentItem) => {
        const {price, quantity} = {...Object.values(currentItem)[0]};
        return accum + (price * quantity);
      }, 0)

      setTotalCost(newTotalCost);
    })();

  }, [location.cart]);

  const changeQuantity = (index) =>{
    // location.changeQuantity(index, newQuantity);
  }

  const removeItemFromCart = (index) => {
    // location.removeItemFromCart(index);
  }

  return (
    <div>
      {
        location.cart.map((item, index) => {
          const itemName = Object.keys(item)[0];
          const {price, quantity} = {...item[itemName]};

          return (
            <div>
              <p>{itemName} x</p>
              <input type="text" value={quantity} />
              <p>${price * quantity} (${price} each)</p>
              <div>
                <button onClick={index => changeQuantity(index)}>change quantity</button>
                <button onClick={index => removeItemFromCart(index)}>remove item</button>
              </div>
            </div>
          );
        })
      }
      <p>Total: ${totalCost}</p>
      <button>Checkout</button>
    </div>
  );
}

export default ShoppingCart;

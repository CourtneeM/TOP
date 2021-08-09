import React, { useEffect, useState } from 'react';
import CheckoutItemCard from './components/CheckoutItemCard';

function ShoppingCart(props) {
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    (() => {
      const newTotalCost = props.cart.reduce((accum, currentItem) => {
        const {price, quantity} = {...Object.values(currentItem)[0]};
        return accum + (price * quantity);
      }, 0)

      setTotalCost(newTotalCost);
    })();

    console.log(props.cart);

  }, [props.cart]);

  return (
    <div>
      {
        props.cart.map((item, index) => {
          return (
            <CheckoutItemCard
              item={item}
              index={index}
              changeQuantity={props.changeQuantity}
              removeItemFromCart={props.removeItemFromCart}
            />
          )
        })
      }
      <p>Total: ${totalCost}</p>
      <button>Checkout</button>
    </div>
  );
}

export default ShoppingCart;

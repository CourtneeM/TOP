import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CheckoutItemCard from './components/CheckoutItemCard';
import Navbar from './components/Navbar';

import './styles/shoppingCart/shoppingCart.css';

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

  const emptyCartMsg = () => {
    return (
      <div className='cart-container'>
        <p>Your cart is currently empty!</p>
        <p><Link to='/shop'>Return to the shop</Link> and add some items.</p>
      </div>
    );
  }

  const displayCart = () => {
    return (
      <div className='cart-container'>
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
        <p className='total-cost'>Total: ${totalCost.toFixed(2)}</p>
        <button onClick={props.clearCart} className='pay-now-btn'><Link to={{pathname: '/summary', totalCost: totalCost}} className='pay-now-link'>Pay Now</Link></button>
      </div>
    );
  }

  return (
    <div>
      <Navbar cart={props.cart} />
      <h1 class='page-title'>Shopping Cart</h1>
      {
        props.cart.length === 0 ?
        emptyCartMsg() :
        displayCart()
      }
    </div>
  );
}

export default ShoppingCart;

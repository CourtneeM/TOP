import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CheckoutItemCard from './components/CheckoutItemCard';
import Navbar from './components/Navbar';

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
      <div>
        <p>Your cart is currently empty!</p>
        <p><Link to='/shop'>Return to the shop</Link> and add some items.</p>
      </div>
    );
  }

  const displayCart = () => {
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
        <p>Total: ${totalCost.toFixed(2)}</p>
        <button onClick={props.clearCart}><Link to={{pathname: '/summary', totalCost: totalCost}} style={styles.payNowLink}>Pay Now</Link></button>
      </div>
    );
  }

  return (
    <div>
      <Navbar cart={props.cart} />
      {
        props.cart.length === 0 ?
        emptyCartMsg() :
        displayCart()
      }
    </div>
  );
}

const styles = {
  payNowLink: {
    color: '#000',
    textDecoration: 'none',
  }
}

export default ShoppingCart;

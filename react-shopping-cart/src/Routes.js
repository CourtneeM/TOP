import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import ShoppingCart from './ShoppingCart';

const Routes = () => {
  const [cart, setCart] = useState([]);
  
  const addItemToCart = (items, itemName, itemCount) => {
    const cartCopy = [...cart];
    const itemIndex = cartCopy.map(item => Object.keys(item)[0]).indexOf(itemName);

    if (itemIndex === -1) {
      cartCopy.push({[itemName]: {...items[itemName], quantity: itemCount}});
    } else {
      cartCopy[itemIndex][itemName].quantity += itemCount;
    }

    setCart(cartCopy);
  }

  const removeItemFromCart = (index) => {
    const cartCopy = [...cart];

    cartCopy.splice(index, 1);
    setCart(cartCopy);
  }

  const changeQuantity = (inputQuantity, itemName, index) => {
    const cartCopy = [...cart];

    cartCopy[index][itemName].quantity = inputQuantity;
    setCart(cartCopy);
  }

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route
            exact
            path='/shop'
            render={(props) => (
              <Shop
                {...props}
                cart={cart}
                addItemToCart={addItemToCart}
              />
            )}
          />
          <Route
            exact
            path='/shopping-cart'
            render={(props) => (
              <ShoppingCart
                {...props}
                cart={cart}
                changeQuantity={changeQuantity}
                removeItemFromCart={removeItemFromCart}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;

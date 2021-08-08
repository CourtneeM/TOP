import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import ShoppingCart from './ShoppingCart';

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/shop' component={Shop}/>
          <Route exact path='/shopping-cart' component={ShoppingCart} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;

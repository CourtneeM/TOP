import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Shop' component={Shop}/>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;

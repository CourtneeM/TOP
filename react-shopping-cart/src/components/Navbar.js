import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import '../styles/navbar/navbar.css';

function Navbar(props) {
  const location = useLocation();
  const cartCount = props.cart && props.cart.length > 0 ?
                    props.cart.reduce((accum, currentItem) => accum + Number(Object.values(currentItem)[0].quantity), 0) :
                    0;

  return (
    <nav>
      <h1><Link to='/' className='nav-link'>Shop Name</Link></h1>
      {
        location.pathname === '/' || location.pathname === '/summary' ?
        <p><Link to='/shop' className='nav-link'>Shop</Link></p> :
        <p><Link to='/shopping-cart' className='cart-link'>Cart: {cartCount}</Link></p>
      }
    </nav>
  );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Navbar(props) {
  const location = useLocation();
  const cartCount = props.cart && props.cart.length > 0 ?
                    props.cart.reduce((accum, currentItem) => accum + Number(Object.values(currentItem)[0].quantity), 0) :
                    0;

  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}><Link to='/' style={styles.homeLink}>Shop Name</Link></h1>
      {
        location.pathname === '/' || location.pathname === '/summary' ?
        <p><Link to='/shop' style={styles.shopLink}>Shop</Link></p> :
        <p><Link to='/shopping-cart'>Cart: {cartCount}</Link></p>
      }
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '125px',
  },
  homeLink: {
    // marginRight: '20px',
    textDecoration: 'none',
  },
  shopLink: {
    // marginLeft: '20px',
    textDecoration: 'none',
  }
}

export default Navbar;

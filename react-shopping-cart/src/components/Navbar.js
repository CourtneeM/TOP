import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Navbar(props) {
  const location = useLocation();
  const cartCount = props.cart && props.cart.length > 0 ?
                    props.cart.reduce((accum, currentItem) => accum + Object.values(currentItem)[0].quantity, 0) :
                    0;

  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Shop Name</h1>
      <div style={styles.linksContainer}>
        <Link to='/' style={styles.homeLink}>Home</Link>
        <Link to='/shop' style={styles.shopLink}>Shop</Link>
      </div>
      {
        location.pathname === '/' ?
        null :
        <p><Link to={{pathname: '/shopping-cart', cart: props.cart}}>Cart: {cartCount}</Link></p>
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

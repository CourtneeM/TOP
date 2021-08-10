import React from 'react';
import Navbar from './components/Navbar';

import './styles/home/home.css';

function Home() {
  return (
    <div>
      <Navbar />
      <div className='welcome-message-container'>
        <h1 className='welcome-header'>Welcome to ShopName!</h1>
        <p>Thank you for visiting our shop!</p>
        <p>Items vary per day, so check back often for new items!</p>
      </div>
    </div>
  );
}

export default Home;

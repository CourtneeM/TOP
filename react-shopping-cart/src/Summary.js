import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';

function Summary({cart}) {
  const location = useLocation();

  return (
    <div>
      <Navbar cart={cart} />
      <div>
        <p>Thank you! Your total of ${location.totalCost.toFixed(2)} has been charged to your card.</p>
        <p>Please allow for up to 7 days for delivery.</p>
      </div>
    </div>
  );
}

export default Summary;

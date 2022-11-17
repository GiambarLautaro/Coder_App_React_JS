import React from 'react';
import '../styles/Checkout.css';
import { Link } from 'react-router-dom';

function Checkout() {
  return (
    <div className="checkout-container">
      <h1>FORMULARIO PARA PAGAR</h1>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <Link to={'/thankyou'}>
        <button>PAGAR</button>
      </Link>
    </div>
  );
}

export default Checkout;

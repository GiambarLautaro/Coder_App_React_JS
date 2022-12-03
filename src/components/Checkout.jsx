import React from 'react';
import '../styles/Checkout.css';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

function Checkout() {
  const mostrarAlerta = () => {
    swal({ title: 'Tu pago Ha sido procesado con éxito!', text: 'este es el cuerpo de la alerta', timer: '3000', icon: 'success' });
  };

  return (
    <div className="checkout-container">
      <h1>FORMULARIO PARA PAGAR</h1>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <Link to={'/thankyou'}>
        <button onClick={() => mostrarAlerta()}>PAGAR</button>
      </Link>
    </div>
  );
}

export default Checkout;

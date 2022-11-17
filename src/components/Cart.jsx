import React from 'react';
import '../styles/Cart.css';
import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <div style={{ backgroundColor: 'red' }}>
      <div>
        <h1>ACÁ VA EL CARRITO CON LOS PRODUCTOS SELECCIONADOS</h1>
        <ul>
          <li>PRODUCTO 1</li>
          <li>PRODUCTO 2</li>
          <li>PRODUCTO 3</li>
        </ul>
      </div>
      <div>
        {' '}
        <Link to={'/checkout'}>
          <button>BOTON DE PROCEDER CON EL PAGO QUE AL APRETARLO TE REDIRIGE A LA CHECKOUT PAGE</button>
        </Link>
      </div>
    </div>
  );
}

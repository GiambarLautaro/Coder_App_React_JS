import React from 'react';
import '../styles/Cart.css';
import { cartContext } from './CartContextComponent';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { totalCount, cart, totalPay, deleteFromCart } = useContext(cartContext);
  return (
    <>
      {cart.map((item) => (
        <div key={item.id}>
          {item.name + ' ' + item.count} <span onClick={() => deleteFromCart(item.id)}>🗑️</span>
        </div>
      ))}
      <div style={{ backgroundColor: 'red' }}>
        tienes en el carro: {totalCount} a pagar:{totalPay}
      </div>
      <Link to="/checkout">
        <button>Proceder con el pago</button>
      </Link>
    </>
  );
}

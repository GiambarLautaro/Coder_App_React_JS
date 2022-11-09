import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/CartWidget.css';

function Carrito() {
  return (
    <>
      <Button variant="white" size="lg" bg="rosa" active>
        <FaShoppingCart />
      </Button>
    </>
  );
}

export default Carrito;

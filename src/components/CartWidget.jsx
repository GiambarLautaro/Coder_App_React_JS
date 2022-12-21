import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/CartWidget.css';
import { useContext } from 'react';
import { cartContext } from './CartContextComponent';

function Carrito() {
  const { cart, totalCount } = useContext(cartContext);

  return (
    <>
      <Button className="cart" variant="white" size="lg" bg="rosa" active>
        <FaShoppingCart />
        {totalCount}
      </Button>
    </>
  );
}

export default Carrito;

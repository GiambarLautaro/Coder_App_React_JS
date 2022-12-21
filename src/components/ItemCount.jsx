import React from 'react';
import '../styles/ItemCount.css';
import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { cartContext } from './CartContextComponent';
import { Link } from 'react-router-dom';

export default function ItemCount({ product }) {
  const [count, setCount] = useState(1);
  const [removeButton, setRemoveButton] = useState(false);
  const { cart, addToCart } = useContext(cartContext);
  function sum() {
    if (count < product.stock) {
      setCount(count + 1);
    }
  }

  function res() {
    if (count >= 2) {
      setCount(count - 1);
    }
  }

  function onAdd() {
    addToCart(product, count);
    setRemoveButton(true);
  }

  useEffect(() => {}, { cart });
  return (
    <div id="item-count" className="d-grid gap-2">
      {removeButton ? (
        <>
          PRODUCTO AGREGADO
          <Link to="/"> seguir comprando</Link>
        </>
      ) : (
        <Button onClick={onAdd} className="button" variant="danger" size="lg">
          Añadir al carrito <FaShoppingCart /> <br />
        </Button>
      )}
      <Button onClick={res} variant="danger">
        -
      </Button>
      <Button className="button-child" variant="white">
        {count}
      </Button>
      <Button onClick={sum} variant="success">
        +
      </Button>
    </div>
  );
}

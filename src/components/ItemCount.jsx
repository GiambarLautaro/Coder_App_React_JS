import React from 'react';
import '../styles/ItemCount.css';
import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from 'react-icons/fa';

export default function ItemCount() {
  return (
    <div id="item-count" className="d-grid gap-2">
      <Button className="button" variant="danger" size="lg">
        Añadir al carrito <FaShoppingCart /> <br />
        <Button variant="danger">-</Button>
        <Button className="button-child" variant="white">
          0
        </Button>
        <Button variant="success">+</Button>
      </Button>
    </div>
  );
}

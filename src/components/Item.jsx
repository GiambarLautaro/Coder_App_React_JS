import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Item.css';

export default function Item({ e }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={e.Data_imagen} className="producto--imagen" />
      <Card.Body>
        <Card.Title>{e.Data_nombre}</Card.Title>
        <Card.Text>{e.Data_descripcion}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{e.Data_color}</ListGroup.Item>
        <ListGroup.Item>{e.Data_talle}</ListGroup.Item>
        <ListGroup.Item>{e.Data_precio}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">añadir al carrito</Card.Link>
      </Card.Body>
    </Card>
    // return id to detail
  );
}

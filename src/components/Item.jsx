import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Item.css';

export default function Item({ item }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.Data_imagen} className="producto--imagen" />
      <Card.Body>
        <Card.Title>{item.Data_nombre}</Card.Title>
        <Card.Text>{item.Data_descripcion}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{item.Data_color}</ListGroup.Item>
        <ListGroup.Item>{item.Data_talle}</ListGroup.Item>
        <ListGroup.Item>{item.Data_precio}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">añadir al carrito</Card.Link>
      </Card.Body>
    </Card>
    // return id to detail
  );
}

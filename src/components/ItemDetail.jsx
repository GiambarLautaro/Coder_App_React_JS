import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Item.css';
import '../styles/ItemDetail.css';
import ItemCount from './ItemCount';

export default function ItemDetail({ productos }) {
  return (
    <div className="detail-container">
      <Card className="card" style={{ width: '28rem' }}>
        <Card.Img className="card-image" variant="top" src={productos.Data_imagen} />
        <Card.Body>
          <Card.Title>{productos.Data_nombre}</Card.Title>
          <Card.Text>{productos.Data_descripcion}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="card-item">{productos.Data_color}</ListGroup.Item>
          <ListGroup.Item className="card-item">{productos.Data_talle}</ListGroup.Item>
          <ListGroup.Item className="card-item">{productos.Data_precio}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <ItemCount />
        </Card.Body>
      </Card>
    </div>
  );
}

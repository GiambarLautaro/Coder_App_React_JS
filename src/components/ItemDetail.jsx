import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Item.css';
import '../styles/ItemDetail.css';
import ItemCount from './ItemCount';

export default function ItemDetail({ product }) {
  return (
    <div className="detail-container">
      <Card className="card" style={{ width: '28rem' }}>
        <Card.Img className="card-image" variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="card-item">{product.color}</ListGroup.Item>
          <ListGroup.Item className="card-item">{product.talle}</ListGroup.Item>
          <ListGroup.Item className="card-item">${product.price}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <ItemCount />
        </Card.Body>
      </Card>
    </div>
  );
}

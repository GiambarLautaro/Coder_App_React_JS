import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Item.css';
import Button from 'react-bootstrap/Button';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Item({ product }) {
  console.log(product);
  return (
    <div className="card-container">
      <Card className="card" style={{ width: '18rem' }}>
        <Card.Img className="card-image" variant="top" src={product.img} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="card-item">{product.color}</ListGroup.Item>
          <ListGroup.Item className="card-item">{product.talle}</ListGroup.Item>
          <ListGroup.Item className="card-item">{product.price}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link to={`/item/${product.id}`}>
            <Button variant="danger" className="button">
              {' '}
              Ver más <AiOutlineEye />
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

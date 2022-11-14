import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Item.css';
import Button from 'react-bootstrap/Button';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Item({ item }) {
  return (
    <div className="card-container">
      <Card className="card" style={{ width: '18rem' }}>
        <Card.Img className="card-image" variant="top" src={item.Data_imagen} />
        <Card.Body>
          <Card.Title>{item.Data_nombre}</Card.Title>
          <Card.Text>{item.Data_descripcion}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="card-item">{item.Data_color}</ListGroup.Item>
          <ListGroup.Item className="card-item">{item.Data_talle}</ListGroup.Item>
          <ListGroup.Item className="card-item">{item.Data_precio}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link to={`/item/${item.Data_id}`}>
            <Button variant="danger" className="button">
              {' '}
              Ver más <AiOutlineEye />
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
    // return id to detail
  );
}

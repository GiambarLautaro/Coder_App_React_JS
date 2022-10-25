import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Producto from "./Producto";
import "bootstrap/dist/css/bootstrap.css";

function ContenedorColumnas() {
  return (
    <Container>
      <Row>
        <Col>
          <Producto />
        </Col>
        <Col>
          <Producto />
        </Col>
      </Row>
      <Row>
        <Col>
          <Producto />
        </Col>
        <Col>
          <Producto />
        </Col>
        <Col>
          <Producto />
        </Col>
      </Row>
    </Container>
  );
}

export default ContenedorColumnas;

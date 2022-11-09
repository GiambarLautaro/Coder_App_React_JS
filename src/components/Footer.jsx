import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import "../styles/Footer.css";
import "bootstrap/dist/css/bootstrap.css";

function PieDePagina() {
  return (
    <Card bg="rosa">
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="https://api.whatsapp.com/send?phone=543515216217">
              Whatsapp Bel
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://api.whatsapp.com/send?phone=543512436330">
              Whatsapp Caro
            </Nav.Link>
          </Nav.Item>
          <Nav.Item bg="rosa">
            <Nav.Link href="https://www.instagram.com/socias.lenceria/">
              Nuestro Instagram
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body bg="dark">
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button
          href="https://www.google.com/maps/place/Socias+Lencer%C3%ADa/@-31.4146341,-64.1847053,17z/data=!3m1!4b1!4m5!3m4!1s0x9432a3ba5ce3f507:0xea7dd0792313d2b5!8m2!3d-31.4146341!4d-64.1847053"
          variant="rosa"
          bg="rosa"
        >
          Nuestra Ubicación
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PieDePagina;

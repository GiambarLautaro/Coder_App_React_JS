import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";

function Contenido() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title
          style={{ color: "#dcb8b2", fontSize: "xx-large", fontWeight: "bold" }}
        >
          BIENVENIDX!
        </Card.Title>
        <Card.Text
          style={{ color: "#dcb8b2", fontSize: "xx-large", fontWeight: "bold" }}
        >
          Comprar en nuestra tienda ahora es más facil que nunca!
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default Contenido;

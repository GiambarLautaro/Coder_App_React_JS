import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import logo from "../assets/img/logo.svg";
import { Nav, NavDropdown } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Carrito from "./CartWidget";

function BarraNav() {
  return (
    <Navbar variant="light" bg="rosa" sticky="top" expand="lg" collapseOnSelect>
      <Navbar.Brand>
        <img src={logo} />
      </Navbar.Brand>
      <NavbarToggle />
      <Navbar.Collapse>
        <Nav>
          <NavDropdown title="Mujeres">
            <NavDropdown.Item href="#">Lencería</NavDropdown.Item>
            <NavDropdown.Item href="#">Ropa Interior Clásica</NavDropdown.Item>
            <NavDropdown.Item href="#">Otra Cosa</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Hombres">
            <NavDropdown.Item href="#">Lencería</NavDropdown.Item>
            <NavDropdown.Item href="#">Ropa Interior Clásica</NavDropdown.Item>
            <NavDropdown.Item href="#">Otra Cosa</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Niños">
            <NavDropdown.Item href="#">Ropa Interior</NavDropdown.Item>
            <NavDropdown.Item href="#">Remeras</NavDropdown.Item>
            <NavDropdown.Item href="#">Pantalones</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Carrito />
    </Navbar>
  );
}

export default BarraNav;

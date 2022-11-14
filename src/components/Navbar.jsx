import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import 'bootstrap/dist/css/bootstrap.css';
import logo from '../images/logo.svg';
import { Nav, NavDropdown } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Carrito from './CartWidget';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function BarraNav() {
  return (
    <Navbar variant="light" bg="rosa" sticky="top" expand="lg" collapseOnSelect>
      <Navbar.Brand className="logo">
        <img src={logo} />
      </Navbar.Brand>
      <NavbarToggle />
      <Navbar.Collapse className="barranav">
        <Nav>
          <NavDropdown title="Mujeres">
            <NavDropdown.Item className="subcategorias">
              {' '}
              <Link to="/category/bombacha">Bombachas</Link>
            </NavDropdown.Item>

            <NavDropdown.Item className="subcategorias">
              <Link to="/category/corpiño">Corpiños</Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="subcategorias">
              <Link to="/category/body">Body/Arnes</Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="subcategorias">
              <Link to="/category/medias-mujer">Medias</Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="subcategorias">
              <Link to="/category/conjunto">Conjuntos Lencería</Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="subcategorias">
              <Link to="/category/complementarios">Complementarios</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Hombres">
            <NavDropdown.Item className="subcategorias">
              <Link to="/category/boxer">Boxers</Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="subcategorias">
              <Link to="/category/medias-hombre">Medias</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Niños">
            <NavDropdown.Item className="subcategorias">
              <Link to="/category/ropa-interior">Ropa Interior</Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="subcategorias">
              <Link to="/category/medias-niño">Medias</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Carrito />
    </Navbar>
  );
}

export default BarraNav;

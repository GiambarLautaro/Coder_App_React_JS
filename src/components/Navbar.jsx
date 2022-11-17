import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
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
        <Link to="/">
          <img src={logo} />
        </Link>
      </Navbar.Brand>
      <NavbarToggle />
      <Navbar.Collapse className="barranav">
        <Nav>
          <NavDropdown title="Mujeres">
            <NavDropdown.Item className="subcategorias">
              {' '}
              <Link style={{ textDecoration: 'none' }} to="/category/bombacha">
                Bombachas
              </Link>
            </NavDropdown.Item>

            <NavDropdown.Item className="subcategorias">
              <Link style={{ textDecoration: 'none' }} to="/category/corpiño">
                Corpiños
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="subcategorias">
              <Link style={{ textDecoration: 'none' }} to="/category/body">
                Body/Arnes
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="subcategorias">
              <Link style={{ textDecoration: 'none' }} to="/category/medias-mujer">
                Medias
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="subcategorias">
              <Link style={{ textDecoration: 'none' }} to="/category/conjunto">
                Conjuntos Lencería
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="subcategorias">
              <Link style={{ textDecoration: 'none' }} to="/category/complementarios">
                Complementarios
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Hombres">
            <NavDropdown.Item className="subcategorias">
              <Link style={{ textDecoration: 'none' }} to="/category/boxer">
                Boxers
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="subcategorias">
              <Link style={{ textDecoration: 'none' }} to="/category/medias-hombre">
                Medias
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Niños">
            <NavDropdown.Item className="subcategorias">
              <Link style={{ textDecoration: 'none' }} to="/category/ropa-interior">
                Ropa Interior
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="subcategorias">
              <Link style={{ textDecoration: 'none' }} to="/category/medias-niño">
                Medias
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Link style={{ textDecoration: 'none' }} to="/cart">
        <Carrito />
      </Link>
    </Navbar>
  );
}

export default BarraNav;

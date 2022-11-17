import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import '../styles/Footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BiHomeHeart } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

function PieDePagina() {
  return (
    <Card style={{ backgroundColor: '#ffacb7' }} className="card">
      <Card.Header style={{ backgroundColor: '#ffacb7' }}>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="https://api.whatsapp.com/send?phone=543515216217">
              Whatsapp Bel <IoLogoWhatsapp />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://api.whatsapp.com/send?phone=543512436330">
              Whatsapp Caro <IoLogoWhatsapp />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item bg="rosa">
            <Nav.Link href="https://www.instagram.com/socias.lenceria/">
              Nuestro Instagram <FaInstagram />{' '}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body style={{ backgroundColor: '#fcdfd7' }}>
        <Card.Title>Somos Socias, un negocio de Familia</Card.Title>
        <Card.Text>
          Sentite bienvenido/a a Socias, que también es tu lugar
          <BiHomeHeart />
        </Card.Text>
        <Button href="https://www.google.com/maps/place/Socias+Lencer%C3%ADa/@-31.4146341,-64.1847053,17z/data=!3m1!4b1!4m5!3m4!1s0x9432a3ba5ce3f507:0xea7dd0792313d2b5!8m2!3d-31.4146341!4d-64.1847053">
          Nuestra Ubicación <CiLocationOn />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PieDePagina;

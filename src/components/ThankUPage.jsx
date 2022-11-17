import React from 'react';
import '../styles/ThankUPage.css';
import { Link } from 'react-router-dom';

export default function ThankUPage() {
  return (
    <div style={{ backgroundColor: 'green' }}>
      {' '}
      <h1>GRACIAS POR SU COMPRA!</h1>
      <h3> tu pedido te esta esperando en...'ubicación' a nombre de 'nombre de cliente' y podes pasar a retirarlo de 'dias '' a partir de las 'horas' hasta las 'hora'</h3>
      <Link to={'/'}>
        <button>Volver a la Pagina Principal</button>
      </Link>
    </div>
  );
}

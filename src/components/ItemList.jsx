import React from 'react';
import Item from './Item';
import '../styles/ItemList.css';

export default function ItemList({ productos }) {
  return (
    <div className="contenedor-productos">
      {productos.map((e) => {
        return <Item key={e.Data_id} item={e} />;
      })}
    </div>
  );
}

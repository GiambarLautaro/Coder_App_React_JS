import React from 'react';
import Item from './Item';
import '../styles/ItemList.css';

// export default function ItemList({ productos }) {
//   return (
//     <div className="contenedor-productos">
//       {productos.map((e) => {
//         return <Item key={e.Data_id} item={e} />;
//       })}
//     </div>
//   );
// }

export default function ItemList({ products }) {
  return (
    <div className="contenedor-productos">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

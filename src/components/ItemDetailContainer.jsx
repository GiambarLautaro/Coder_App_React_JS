// import { useParams } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import ItemDetail from './ItemDetail';
// import { getProducts } from '../Data/ProductosData';

// function ItemDetailContainer() {
//   const { iditem } = useParams();
//   const [productos, setProductos] = useState([]);
//   useEffect(() => {
//     const getClothes = new Promise((resolve, reject) => {
//       resolve(getProducts());
//     });
//     getClothes.then((resolve) => {
//       setProductos(resolve.find((item) => item.Data_id === parseInt(iditem)));
//     });
//   }, [iditem]);
//   return (
//     <div className="item-detail-container">
//       <ItemDetail productos={productos} />
//     </div>
//   );
// }

// export default ItemDetailContainer;

import React, { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import '../styles/ItemDetailContainer.css';

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, 'products', idItem);

    getDoc(refDoc).then((item) => {
      const aux = {
        ...item.data(),
        id: item.id,
      };

      console.log(aux);

      setProduct(aux);
    });
  }, [idItem]);

  // return <ItemDetail product={product} />;

  return (
    <div className="item-detail-container">
      <ItemDetail product={product} />{' '}
    </div>
  );
}

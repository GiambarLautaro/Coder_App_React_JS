import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getProducts } from '../Data/ProductosData';
import '../styles/ItemDetailContainer.css';

function ItemDetailContainer() {
  const { iditem } = useParams();
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const getClothes = new Promise((resolve, reject) => {
      resolve(getProducts());
    });
    getClothes.then((resolve) => {
      setProductos(resolve.find((item) => item.Data_id === parseInt(iditem)));
    });
  }, [iditem]);
  return (
    <div className="item-detail-container">
      <ItemDetail productos={productos} />
    </div>
  );
}

export default ItemDetailContainer;

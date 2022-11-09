import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import '../styles/ItemListContainer.css';
import ItemList from './ItemList';
import { getProducts } from '../Data/ProductosData';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {
  const { idcategory } = useParams();
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const getClothes = new Promise((resolve, reject) => {
      resolve(getProducts()); //devuelve array de productos en 2 segundos
    });
    getClothes.then((resolve) => {
      if (idcategory) {
        setProductos(resolve.filter((item) => item.Data_Categoria === idcategory));
      } else {
        setProductos(resolve);
      }
    });
  }, [idcategory]);

  return (
    <>
      <ItemList productos={productos} />
    </>
  );
}

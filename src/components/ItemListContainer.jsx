import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import '../styles/ItemListContainer.css';
import ItemList from './ItemList';
import { getProducts } from '../Data/ProductosData';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const myCollection = collection(db, 'products');

    getDocs(myCollection).then((data) => {
      const auxProducts = data.docs.map((product) => ({
        ...product.data(),
        id: product.id,
      }));
      setProducts(auxProducts);
    });
  }, []);

  // const { idcategory } = useParams();
  // const [productos, setProductos] = useState([]);
  // useEffect(() => {
  //   const getClothes = new Promise((resolve, reject) => {
  //     resolve(getProducts()); //devuelve array de productos en 2 segundos
  //   });
  //   getClothes.then((resolve) => {
  //     if (idcategory) {
  //       setProductos(resolve.filter((item) => item.Data_Categoria === idcategory));
  //     } else {
  //       setProductos(resolve);
  //     }
  //   });
  // }, [idcategory]);

  return (
    <>
      {/* <ItemList productos={productos} /> */}
      <ItemList products={products} />
    </>
  );
}

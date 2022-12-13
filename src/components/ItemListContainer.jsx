import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import '../styles/ItemListContainer.css';
import ItemList from './ItemList';
// import { getProducts } from '../Data/ProductosData';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let myCollection;

    if (!idCategory == undefined) {
      myCollection = collection(db, 'products');
    } else {
      myCollection = query(collection(db, 'products'), where('idCategory', '==', idCategory));
    }
    getDocs(myCollection).then((data) => {
      const auxProducts = data.docs.map((product) => ({
        ...product.data(),
        id: product.id,
      }));

      setProducts(auxProducts);
    });
  }, [idCategory]);

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

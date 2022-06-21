import React, { useEffect, useState } from 'react';
import "./styles/ItemListContainer.css"
import ItemList from "./ItemList"
import { Loader } from './Loader';
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs, where, query } from "firebase/firestore"




export default function ItemListContainer({greeting = "Nuestros productos"}) { 
    const [productsList, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);
    const {category} = useParams()

    useEffect(() => {
      const db = getFirestore();
      const queryCollection = collection(db, "products");

      if(!category){  
      getDocs(queryCollection)
        .then((resp) =>
          setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
        .catch((error) => error)
        .finally(() => setLoader(false))
      }else {
        const queryCollectionFilter = query(
          queryCollection,
          where("category", "==", category),
          );
          getDocs(queryCollectionFilter)
          .then((resp) =>
          setProducts(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
          )
          .catch((err) => console.error(err))
          .finally(() => setLoader(false));
        }
    }, [category]);

  

    return (

      <>
        <h1 className="itemListContainer__title">{greeting}</h1>
        <div className="itemListContainer">

          {loader ? <Loader greeting={"Cargando productos..."}/> : <ItemList products={productsList}/>}         

        </div>
      </>
            
    );
  }
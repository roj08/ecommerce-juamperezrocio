import React, { useEffect, useState } from 'react';
import "./styles/ItemListContainer.css"
import ItemList from "./ItemList"
//import { products }from "./data/data"
import { Loader } from './Loader';
import { useParams } from 'react-router-dom';
//import { getData } from './data/data';
import {getFirestore, collection, getDocs, where, query } from "firebase/firestore"




export default function ItemListContainer({greeting = "Nuestros productos"}) { 
    const [productsList, setProducts] = useState([]);
    const [product, setProduct] = useState({})
    const [loader, setLoader] = useState(true);
    const {category} = useParams()

     // useEffect(()=>{
    //   const db = getFirestore()
    //   const queryCollection = collection(db, "productos")
    //   const queryCollectionFilter = query(queryCollection, where("category", "==", "shopper"))

    //   getDocs(queryCollectionFilter)
    //   .then(res=> setProducts(res.docs.map(item=>({id:item.id, ...item.data()}))))
    //   .catch((err)=> console.log(err))
    // .finally(()=>setLoader(false)) 
    // },[])

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
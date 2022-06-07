import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {ItemDetail}  from './ItemDetail';
import { Loader } from './Loader';
import {getFirestore, doc, getDoc} from "firebase/firestore"


export const ItemDetailContainer = () => {
  const [loader, setLoader] = useState(true);
  const [product, setProduct] = useState({});
  const { id } = useParams()

  useEffect(()=>{
    const db = getFirestore()
    const dbQuery = doc(db, "products", id)
    getDoc(dbQuery)
    .then(res => setProduct( {id : res.id, ...res.data() } ) )
    .catch((err)=> console.log(err))
    .finally(()=>setLoader(false))   
 }, [])


  return (
      <>
      <div>
        {loader ? <Loader greeting={"Cargando el detalle"}/> : <ItemDetail  product={product}/> }
      

      </div>
      
      </>
    
  )
}
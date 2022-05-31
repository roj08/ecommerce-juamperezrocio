import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {ItemDetail}  from './ItemDetail';
import {getData} from '../components/data/data';
import { Loader } from './Loader';


export const ItemDetailContainer = () => {
  const [loader, setLoader] = useState(true);
  const [product, setProduct] = useState({});
  const { id } = useParams()

  useEffect(() => {
      getData(id) 
      .then(respuesta=> setProduct(respuesta))
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
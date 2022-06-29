import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {ItemDetail}  from './ItemDetail';
import { Loader } from './Loader';
import {getFirestore, doc, getDoc} from "firebase/firestore";


export const ItemDetailContainer = () => {
  const [loader, setLoader] = useState(true);
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(()=>{
    const db = getFirestore();
    const dbQuery = doc(db, "products", id);
    getDoc(dbQuery)
      .then((resp) => {
        !resp.data() && navigate("/*", { replace: true });
        setProduct({ id: resp.id, ...resp.data() });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  }, [navigate]);


  return (
      <>
      <div>
        {loader ? <Loader greeting={"Cargando el detalle"}/> : <ItemDetail  product={product}/> }
      

      </div>
      
      </>
    
  );
};
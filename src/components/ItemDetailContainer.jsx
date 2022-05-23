import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from './helpers/getFetch';
//import { getProductById } from '../components/helpers/getData';
import ItemDetail from './ItemDetail';
import './styles/ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})

  const { detalleId } = useParams()

  useEffect(() => {
    getFetch(detalleId)
    .then(respuesta => setProducto(respuesta))
    .catch((err)=> console.log(err))
  }, [])

  console.log(producto)
  console.log(detalleId)
  return (
    <div>
      <ItemDetail />
    </div>
  )
}

export default ItemDetailContainer
/*const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect((product) => {
   
    getProductById(Number(id), setProduct);
    console.log(product);
  }, [id]);

  return (
    <section className="item-detail-container">
      {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
    </section>
  );
};

export default ItemDetailContainer;*/
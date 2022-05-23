import ItemList from './ItemList';
import { getFetch } from './helpers/getFetch';
import { useParams } from 'react-router-dom';

import './styles/ItemListContainer.css';
import './styles/ItemList.css';
import { useEffect, useState } from 'react';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    if (id) {
      getFetch()
      .then(respuesta => setProductos(respuesta.filter((prods)=> prods.categoria === id )))
      .catch((err)=> console.log(err))
      .finally(()=>setLoading(false))
    } else {
      getFetch()
      .then(respuesta=> setProductos(respuesta))
      .catch((err)=> console.log(err))
      .finally(()=>setLoading(false))
    }
  }, [id])

  console.log(id)

  return (
    <section className="title">
      <div className="title-container">
        <article className="title-container-text">
          <h1>Cositas Bonitas</h1>
          <p>
            ¡Los mejores regalos los podes encontrar acá!
            También podes contactarnos para pedirnos algo personalizado
          </p>
        </article>
      </div>
      <ItemList />
    </section>
  );

}

export default ItemListContainer;

/*const ItemListContainer = () => {
    
    return (
      <section className="title">
        <div className="title-container">
          <article className="title-container-text">
            <h1>Cositas Bonitas</h1>
            <p>
              ¡Los mejores regalos los podes encontrar acá!
              También podes contactarnos para pedirnos algo personalizado
            </p>
          </article>
        </div>
        <ItemList />
      </section>
    );
  };
  
  export default ItemListContainer;*/
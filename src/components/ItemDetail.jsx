import ItemCount from './ItemCount';
import './styles/ItemDetail.css';
import swal from 'sweetalert';


const ItemDetail = ({ item }) => {
    const onAdd = (qty) => {
        swal({
            title: "Completado",
            text: "Agregaste " + qty + " productos",
            icon: "success",
          });
  };

  console.log(item);
  return (
    <article className="product-detail">
      <img src={item.image} alt="" className="product-detail__img" />
      <div className="product-detail__info">
        <h2 className="name">{item.name}</h2>
        <p className="description">{item.description}</p>
        <ul className="info-grid">
          <li>Price:</li>
          <li>${item.price}</li>
        </ul>
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
      </div>
    </article>
  );
};

export default ItemDetail;
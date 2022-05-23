import ItemCount from './ItemCount.jsx';
import swal from 'sweetalert';
import './styles/Item.css';

const Item = (item) => {
  const onAdd = (qty) => {
    swal({
        title: "Completado",
        text: "Agregaste " + qty + " productos",
        icon: "success",
      });
  };

  return (
    <article className="product-card">
      <img className="product-card__image" src={item.image} alt="" />

      <h3 className="product-card__name">{item.name}</h3>
      <span className="product-card__name">${item.price}</span>

      <ItemCount stock={item.stock} onAdd={onAdd} initial={1} />
    </article>
  );
};

export default Item;
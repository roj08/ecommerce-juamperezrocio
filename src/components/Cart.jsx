import { useCartContext } from "../context/CartContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { Form } from "./Form";

import "./styles/Cart.css"

export const Cart = () => {
  const { cartList, deleteCart, deleteItem } = useCartContext();

  const total = cartList.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart">
        <h2 className="cartTitle">Su pedido</h2>

        {cartList.map(product => 
          <li className="cartItem" key={product.id}>
            <Link to={`/detail/${product.id}`}>
            <img className="img-cart" src={product.img} alt=''></img>
            </Link>
            <p>{product.name}</p>
            <p>Precio: ${product.price}</p>
            <p>Cantidad: {product.count} unidades</p>
            <p>Total: {product.price * product.count}</p>
            <button onClick={()=>deleteItem(product.id)} className="delete-item">X</button>
          </li>)}

          {cartList.length ? (
            <>
              <div>`
                <h3 className="totalCompra">Total: ${total}</h3>
                <button className="delete-button" onClick={deleteCart}>Vaciar Carrito</button>
              </div>

              <Form />

            </> 
            ) : ( 
              <div className="carritoVacio">
                <p>No hay productos en tu carrito</p>
                <Link to={"/"}>
                  <p>Ir a la tienda</p>
                  <FontAwesomeIcon icon={faCartShopping} color={'#1d1d1d'} size={'1x'}/>
                </Link>
              </div>
              )}
      </div>

    </div>
  )
}
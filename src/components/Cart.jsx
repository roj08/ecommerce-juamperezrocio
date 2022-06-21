import { useCartContext } from "../context/CartContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import React, { useState } from 'react'
import { collection, getFirestore, addDoc } from "firebase/firestore";

import "./styles/Cart.css"

export const Cart = () => {
  const [setUserId] = useState('');
  const db = getFirestore()
  const {cartList, deleteCart, deleteItem} = useCartContext()
  const total = cartList.reduce((acc, item)=> acc = acc + (parseFloat(item.price)*item.count),0)
  const [buyer, setBuyer] = useState({
    name:'',
    email: '',
    lastName:'',
    adress: '',
    city: ''
  });

  function handleInputChange(e){
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    })
  }

  function newOrder(e){
        e.preventDefault();
        let order = {};

        order.buyer = buyer;
        order.items = cartList.map(item => {
            const id = item.id;
            const name = item.name;
            const price = item.price;
            const quantity = item.count;

            return { id, name, price, quantity }
          })
          console.log(order)
        order.total = total;
        
        const queryCollectionOrders = collection(db, 'orders')

        setTimeout(()=>{
          addDoc(queryCollectionOrders, order)
            .then(resp => setUserId(resp.id))
            .catch(err => console.log(err))
          
        },2000)
       
    }



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
            <button onClick={()=>deleteItem(product.id)} className="delete-item">X</button>
          </li>)}

          {cartList.length ?
            <>
              <div>`
                <h3 className="totalCompra">Total: ${total}</h3>
                <button className="delete-button" onClick={deleteCart}>Vaciar Carrito</button>
              </div>
              <div className="cartInfo">
                <form onSubmit={(e) => newOrder(e)}>
                  <input type="email" placeholder="Mail" name="email" onChange={handleInputChange} />
                  <input type="text" placeholder="Nombre" name="name" onChange={handleInputChange} />
                  <input type="text" placeholder="Apellido" name="lastName" onChange={handleInputChange} />
                  <input type="text" placeholder="Dirección" name="adress" onChange={handleInputChange} />
                  <input type="text" placeholder="Localidad" name="city" onChange={handleInputChange} />
                  <button type="submit">Terminar pedido</button>
                </form>
              </div>
            </> : 
              <div className="carritoVacio">
                <p>No hay productos en tu carrito</p>
                <Link to={"/"}>
                  <p>Ir a la tienda</p>
                  <FontAwesomeIcon icon={faCartShopping} color={'#1d1d1d'} size={'1x'}/>
                </Link>
              </div>}
      </div>

    </div>
  )
}
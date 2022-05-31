import { useCartContext } from "../context/CartContext"
import "./styles/Cart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from "react-router-dom";
import React, { useState } from 'react'

export const Cart = () => {

  const {cartList, deleteCart, deleteItem} = useCartContext()

  const total = cartList.reduce((acc, item)=> acc = acc + (parseFloat(item.price)*item.count),0)

console.log(total)
  return (
    <div className="cart-container">
      <div className="cart">
        <h2 className="cartTitle">Su pedido</h2>
          {cartList.map(product => 
          <li className="cartItem">
            <Link to={`/detail/${product.id}`}>
            <img className="img-cart" src={product.img} alt=''></img>
            </Link>
            <p>{product.name}</p>
            <p>Precio: ${product.price}</p>
            <p>Cantidad: {product.count}u</p>
            <button onClick={()=>deleteItem(product.id)} className="delete-item">X</button>
          </li>)}
          {cartList.length ? <div>`
                                <h3 className="totalCompra">Total: ${total}</h3>
                                <button className="delete-button" onClick={deleteCart}>Vaciar Carrito</button>
                            </div>  : <div className="carritoVacio">
                                                <p>Su carrito está vacío</p>
                                                <Link to={"/"}>
                                                  <p>Ir a la tienda</p>
                                                  <FontAwesomeIcon icon={faCartShopping} color={'#1d1d1d'} size={'1x'}/>
                                                </Link>
                                              </div> }
                              
      </div>
        <div className="cartInfo">
            <form>
            <input type="text" placeholder="Nombre"/>
            <input type="text" placeholder="Apellido"/>
            <input type="text" placeholder="Dirección"/>
            <input type="text" placeholder="Localidad"/>
            <input type="text" placeholder="Nombre"/>
            <button type="submit">Finalizar pedido</button>
            </form>

        </div>
    </div>
  )
}
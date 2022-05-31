import React, { useState } from 'react'
import { BuyButton } from './BuyButton'
import ItemCount from './ItemCount'
import { useCartContext } from "../context/CartContext"
import "./styles/ItemDetail.css"


export const ItemDetail = ({product}) => {
    const [inputType, setInputType] = useState('itemCount');
    const {addToCart} = useCartContext()

    function handleInputType() {
        setInputType('buyButtons');
    }

    const onAdd = (count) =>{
        console.log(`Has agregado ${count} producto/s a tu carrito`)
        addToCart({...product, count})
      }
    
  return (
    <div className='itemDetail'>
        <div className='detailImg'>
            <img className="item_det_img" src={product.img} alt="" />
        </div>
        <div className='detailInfo'>
            <h3 className="item_title">{`Producto: ${product.name}`}</h3>
            <p>Descripción: {`${product.description}`}</p>
            <p className='item_price'>{`Precio: ${product.price}`}</p>
            {inputType === 'itemCount' ?
                    <ItemCount initial={1} stock={5} onAdd={onAdd} handleInputType={handleInputType}/>:
                    <BuyButton/>}
            
        </div>
    </div>
  )
}
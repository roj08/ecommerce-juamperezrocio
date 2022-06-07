import {Link} from 'react-router-dom'
import "./styles/Item.css"

export default function Item({name, price, img, id}) {

  return (
      <>
      <Link to={`/detail/${id}`} className="item">
        <div>
          <img className="item_img" src={img} alt="" />
          <div className='item_info'>
            <h3 className="item_title">{name}</h3>
            <p className='item_price'>{`Precio: ${price}`}</p>
          </div>
        </div>
        <button className='masInfo' >Más información</button>
    </Link>
        </>
  )
}
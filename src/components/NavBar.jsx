import logo from "./styles/img/CositasBonitasLogo.png"
import { CartWidget } from './CartWidget'
import {Link} from 'react-router-dom'
import { useCartContext } from "../context/CartContext"

import "./styles/NavBar.css"

export const NavBAr = () => {
  const {cartList}=useCartContext()
  
  return (
    <header>
      <Link to={'/'}>
        <img src={logo} className="logoNav" alt=""/>
      </Link>
            
        <nav className='navBar'>           
            <ul>          
              <Link to={'/'} className="link">
                <li>Home</li>         
              </Link>
             <Link to={`category/tazas`} className="link">
                 <li>Tazas</li>              
             </Link>
             <Link to={`category/cuadernos`} className="link">
                 <li>Cuadernos</li>
             </Link>
             <Link to={`category/peluches`} className="link">
                 <li>Peluches</li>              
             </Link>
             <Link to={`category/contacto`} className="link">
                <li>Contacto</li>        
             </Link>  
            </ul>
            {cartList.length ? <Link to={"/cart"}>
              <CartWidget/>
            </Link> : <CartWidget/>}

        </nav>
    </header>
  )
}
import logo from "./styles/img/CositasBonitasLogo.png"
import { CartWidget } from './CartWidget'
import {Link} from 'react-router-dom'
import "./styles/NavBar.css"

export const NavBAr = () => {
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
             <Link to={`/category/tazas`} className="link">
                 <li>Tazas</li>              
             </Link>
             <Link to={`/category/cuadernos`} className="link">
                 <li>Cuadernos</li>
             </Link>
             <Link to={`/category/carpetas`} className="link">
                 <li>Carpetas</li>              
             </Link>
             <Link to={`/category/contacto`} className="link">
                <li>Contacto</li>        
             </Link>  
            </ul>
            <Link to={"/cart"}>
              <CartWidget/>
            </Link>
        </nav>
    </header>
  )
}
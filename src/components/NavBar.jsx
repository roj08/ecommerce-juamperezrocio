import logo from "./styles/img/CositasBonitasLogo.png"
import { CartWidget } from './CartWidget'
import {Link} from 'react-router-dom'

import "./styles/NavBar.css"

export const NavBAr = () => {
  
  return (
    <header>
        <nav className='navBar'> 
          <Link to={'/'}>
           <img src={logo} className="logoNav" alt=""/>
          </Link>          
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
          </ul>
            <Link to={"/cart"}>
              <CartWidget/>
            </Link>
        </nav>
    </header>
  );
};
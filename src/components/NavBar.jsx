import React from 'react';
import './styles/NavBar.css';
import logo1 from './styles/img/CositasBonitasLogo.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    
    <header className="header">

      <div className='header-container'>

        <nav className="nav-container">
          <ul className='nav-container2'>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/categoria/tazas"> Tazas </Link>
            </li>
            <li>
              <Link to="/categoria/cuadernos"> Cuadernos </Link>
            </li>
            <li>
              <a href="/">Contacto</a>
            </li>
          </ul>
        </nav>

        <div className="logo-container">
          <Link to='/'>
          <img src={logo1} alt="logo" className='logo'/>
          </Link>
        </div>

        <CartWidget />

      </div>
    </header>
  );
};

export default NavBar;

/*<li className="products-item">
              <a href="/">
                Productos <span className="arrow"></span>
              </a>
            </li>*/
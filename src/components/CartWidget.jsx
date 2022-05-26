import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './styles/CartWidget.css';


const CartWidget = () => {

  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

    return (
      <div className="cart-widget">
        
        <Link to='/cart'>
        <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" />
        </Link>

        <div className="qty-display">{cart.length}</div>
      </div>
    );
  };
  
  export default CartWidget;
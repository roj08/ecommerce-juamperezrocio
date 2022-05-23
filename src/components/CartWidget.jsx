import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './styles/CartWidget.css';


const CartWidget = () => {

    return (
      <div className="cart-widget">
        
        <Link to='/cart'>
        <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" />
        </Link>

        <div className="qty-display">0</div>
      </div>
    );
  };
  
  export default CartWidget;
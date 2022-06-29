import { useCartContext } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import './styles/CartWidget.css';

export const CartWidget = () => {

  const {cartList}=useCartContext();

  const totalItems =  cartList.reduce(
    (acc, item) => (acc = acc + item.count),
    0
  );

  return (
    <>
     <div>
        <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" />
        <button className="totalItems">{totalItems}</button>
      </div>
    </>  
    );
  };
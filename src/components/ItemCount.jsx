import { useState } from 'react';
import BuyButton from './BuyButton';

import './styles/ItemCount.css';


const ItemCount = ({ onAdd }) => {
  const initial = 0;

  const [qty, setQty] = useState(initial);

  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div className="count-container">
      <div className="count-container__contador">
        <button
          className="count-container__button"
          onClick={() => addProduct(-1)}
        >
          -
        </button>
        <span className="count-container__qty">{qty}</span>
        <button
          className="count-container__button"
          onClick={() => addProduct(+1)}
        >
          +
        </button>
      </div>
      
      <BuyButton onClick={onAdd} />

    </div>
  );
};

export default ItemCount;

/*<button
        className="button-primary"
        onClick={() => onAdd(qty)}
      >
        Añadir
      </button>*/
import { useState } from 'react';
import './CartItem.css';

const CartItem = function(props) {
  const [itemAmount, setItemAmount] = useState(props.amount); 

  const reduceAmountHandler = function(e) {
    e.preventDefault();
    if (itemAmount === 1) return;

    props.onAmountChange(itemAmount - 1, props.index);
    setItemAmount(itemAmount - 1);
  }

  const addAmountHandler = function(e) {
    e.preventDefault();

    props.onAmountChange(itemAmount + 1, props.index);
    setItemAmount(itemAmount + 1);
  }

  return (
    <div className='cart-item'>
      <div className='cart-item-info'>
        <h2 className='cart-item-name'>{props.name}</h2>
        <h4 className='cart-item-price'>
          {Math.round(props.price * itemAmount * 100) / 100}
        </h4>
        <h4 className='cart-item-amount'>x{itemAmount}</h4>
      </div>
      <div className='cart-item-buttons'>
        <button onClick={reduceAmountHandler}>-</button>
        <button onClick={addAmountHandler}>+</button>
      </div>
    </div>
  );
}

export default CartItem;
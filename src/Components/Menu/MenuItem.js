import {React, useState} from 'react';
// import CartModal from '../CartModal/CartModal';
import './MenuItem.css';

const MenuItem = function(props) {
  const [itemAmount, setItemAmount] = useState(1); 

  const amountChangeHandler = function(e) {
    if (e.target.value < 0 || e.target.value > 99) return;
    setItemAmount(e.target.value);
  }

  const addToCartHandler = function(e) {
    e.preventDefault();
    props.onTransferToCart(props.id, itemAmount);
    // alert(itemAmount);
  }

  return (
    <div className='menu-item'>
      <div className='item-info'>
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
        <h3 className='item-price'>${props.price}</h3>
      </div>
      <div className='item-order'>
        <h4 className='item-amount'>Amount</h4>
        <input 
          className='item-amount-number' 
          value={itemAmount}
          onChange={amountChangeHandler}
          type='number'
          // min='1'
        ></input>
        <button onClick={addToCartHandler}>+Add</button>
      </div>
    </div>
  )
}

export default MenuItem;
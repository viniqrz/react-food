import './MainHeader.css';
import CartModal from './../CartModal/CartModal.js';
import { useState } from 'react';

const MainHeader = function(props) {
  const [displayCart, setDisplayCart] = useState(false);

  const displayCartHandler = function(e) {
    setDisplayCart(!displayCart);
  }

  return (
    <header className='main-header'>
      {displayCart ? 
        <CartModal 
          onAmountChange={props.onAmountChange}
          cartItems={props.items} 
          onCloseModal={displayCartHandler}
        /> 
      :
        ''}

      <h1>ReactFood</h1>
      <button className='cart-btn' onClick={displayCartHandler}>
        <i className="fas fa-shopping-cart"></i>
        <p className='cart-text'>Your Cart</p>
        <div className='cart-counter'>
          <p>{props.items.length}</p>
        </div>
      </button>
    </header>
  )
}

export default MainHeader;
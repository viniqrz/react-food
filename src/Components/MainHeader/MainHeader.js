import './MainHeader.css';
import CartModal from './../CartModal/CartModal.js';
import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';

const MainHeader = function(props) {
  const [displayCart, setDisplayCart] = useState(false);

  const cart = useContext(CartContext);

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
        <p className='cart-text'>Open Cart</p>
        <div className='cart-counter'>
          <p>{cart.cartState.totalAmount}</p>
        </div>
      </button>
    </header>
  )
}

export default MainHeader;
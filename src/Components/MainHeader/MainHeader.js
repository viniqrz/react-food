import './MainHeader.css';
import CartModal from './../CartModal/CartModal.js';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

const MainHeader = function(props) {
  const [displayCart, setDisplayCart] = useState(false);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cart = useContext(CartContext);
  const items = cart.cartState.items;

  const displayCartHandler = function(e) {
    setDisplayCart(!displayCart);
  }

  const btnClasses = `cart-btn ${btnIsHighlighted ? 'bump' : ''}`;

  useEffect(() => {
    if (items.length === 0) return;

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300)

    return () => {
      clearTimeout(timer);
    }
  }, [items]);

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
      <button className={btnClasses} onClick={displayCartHandler}>
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
import './CartList.css';
import CartItem from './CartItem.js';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const CartList = function(props) {
  const calcTotalPrice = function() {
    const total = cart.cartState.items
      .map(el => el.price * el.amount)
      .reduce((a, b) => a + b, 0);
    
    return Math.round(total * 100) / 100;
  }

  const cart = useContext(CartContext);

  return (
    <div className='cart-list'>
      <div className='cart-scroll-container'>
        {cart.cartState.items.map((item) => (
          <CartItem 
            key={Math.random().toString()}
            id={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
          />
        ))}
      </div>
      <div className='cart-info'>
        <h2 className='cart-amount-text'>Total Amount</h2>
        <h2 className='cart-amount-value'>${calcTotalPrice()}</h2>
      </div>
      <div className='cart-list-buttons'>
        <button onClick={props.onClose}className='cart-list-close-btn'>Close</button>
        <button className='cart-list-order-btn'>Order</button>
      </div>
    </div>
  )
}

export default CartList;

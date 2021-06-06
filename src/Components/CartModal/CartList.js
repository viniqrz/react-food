import './CartList.css';
import CartItem from './CartItem.js';
import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartForm from './CartForm.js';

const CartList = function(props) {
  const [hasClickedOrderOnce, setHasClickedOrderOnce] = useState(false);
  const [hasClickedOrderTwice, setHasClickedOrderTwice] = useState(false);

  const calcTotalPrice = function() {
    const total = cart.cartState.items
      .map(el => el.price * el.amount)
      .reduce((a, b) => a + b, 0);
    
    return Math.round(total * 100) / 100;
  }

  const orderHandler = function(e) {
    if (hasClickedOrderOnce) setHasClickedOrderTwice(true);
    if (!hasClickedOrderOnce) setHasClickedOrderOnce(true);
  }

  const cart = useContext(CartContext);

  return (
    <div className='cart-list'>
      {!hasClickedOrderOnce ? 
        <div>
          <div className='cart-scroll-container'>
            {cart.cartState.items.length === 0 ? 
              <div className='empty'>
                <h2>Empty Cart</h2>
              </div> 
              : 
              cart.cartState.items.map((item) => (
                <CartItem 
                  key={Math.random().toString()}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  amount={item.amount}
                />
              ))
            }
          </div>
        </div>
        :
        <CartForm onCheckout={hasClickedOrderTwice}/>
      }
      {/* {hasClickedOrderOnce && <CartForm onCheckout={hasClickedOrderTwice}/>} */}
      <div className='cart-info'>
        <h2 className='cart-amount-text'>Total Amount</h2>
        <h2 className='cart-amount-value'>${calcTotalPrice()}</h2>
      </div>
      <div className='cart-list-buttons'>
        <button onClick={props.onClose}className='cart-list-close-btn'>Close</button>
        <button onClick={orderHandler}className='cart-list-order-btn'>
          {!hasClickedOrderOnce ? 'Order' : 'Finish'}
        </button>
      </div>
    </div>
  )
}

export default CartList;

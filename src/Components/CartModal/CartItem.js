import React, {useContext} from 'react';
import CartContext from '../../store/cart-context';
import './CartItem.css';

const CartItem = function(props) {
  const cart = useContext(CartContext);

  const reduceAmountHandler = function(e) {
    if (props.amount === 1) {
      cart.removeItem(props.id);
      return
    }

    cart.reduceAmount(props.id);
  }

  const addAmountHandler = function(e) {
    cart.addAmount(props.id);
  }

  return (
    <React.Fragment>
        <div className='cart-item'>
          <div className='cart-item-info'>
            <h2 className='cart-item-name'>{props.name}</h2>
            <h4 className='cart-item-price'>
              {Math.round(props.price * props.amount * 100) / 100}
            </h4>
            <h4 className='cart-item-amount'>x{props.amount}</h4>
          </div>
          <div className='cart-item-buttons'>
            <button onClick={reduceAmountHandler}>-</button>
            <button onClick={addAmountHandler}>+</button>
          </div>
        </div>
    </React.Fragment>
  );
}

export default CartItem;
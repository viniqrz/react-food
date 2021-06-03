import React, {useContext} from 'react';
import CartContext from '../../store/cart-context';
import './CartItem.css';

const CartItem = function(props) {
  const cart = useContext(CartContext);

  const reduceAmountHandler = function(e) {
    cart.removeItem({
      id: props.id,
      amount: props.amount
    })
  }

  const addAmountHandler = function(e) {
    cart.addItem({
      id: props.id,
      amount: 1,
    });

  }

  return (
    <React.Fragment>
        <div className='cart-item'>
          <div className='cart-item-info'>
            <h2 className='cart-item-name'>{props.name}</h2>
            <h4 className='cart-item-price'>
              ${Math.round(props.price * props.amount * 100) / 100}
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
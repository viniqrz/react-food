import './CartList.css';
import CartItem from './CartItem.js';
// import { useContext } from 'react';
// import MyContext from '../../App';
// import App from '../../App';

const CartList = function(props) {
  const calcTotalPrice = function() {
    const total = props.cartItems
      .map(el => el[0].price * el[1])
      .reduce((a, b) => a + b, 0);
    
    return Math.round(total * 100) / 100;
  }

  return (
    <div className='cart-list'>
      <div className='cart-scroll-container'>
        {props.cartItems.map((item, index, array) => {
          // console.log(item, index);
          return (
          <CartItem 
            key={Math.random().toString()}
            id={item[0].id}
            name={item[0].name}
            price={item[0].price}
            desc={item[0].desc}
            amount={item[1]}
            onAmountChange={props.onAmountChange}
            index={index}
          />
        )})}
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

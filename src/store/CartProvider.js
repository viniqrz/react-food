import { useState } from 'react';
import CartContext from './cart-context.js';

const DUMMY_CART = [];

const CartProvider = function(props) {
  const [items, setItems] = useState(DUMMY_CART);
  const [totalAmount, setTotalAmount] = useState(0);

  const reduceAmountHandler = function(id) {
    setItems(items.map((el) => {
      if (el[0].id === id) {
        return [el[0], el[1] - 1];
      } else {
        return el
      }
    }))

    setTotalAmount(totalAmount - 1);
  }

  const addAmountHandler = function(id, num=1) {
    setItems(items.map((el) => {
      if (el[0].id === id) {
        return [el[0], el[1] + 1 * num];
      } else {
        return el
      }
    }))

    setTotalAmount(totalAmount + 1 * num);
  }

  const addToCartHandler = function(item) {
    if (items.find(el => el[0].id === item[0].id) !== undefined) {
      addAmountHandler(item[0].id, item[1]);
      return
    }

    setItems([...items, item]);
    setTotalAmount(totalAmount + 1);
  }

  const removeFromCartHandler = function(id) {
    setItems(items.filter(el => el[0].id !== id));
    setTotalAmount(totalAmount - 1);
  } 

  const cartContext = {
    items,
    totalAmount,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler,
    addAmount: addAmountHandler,
    reduceAmount: reduceAmountHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;
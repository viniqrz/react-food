import { useReducer } from 'react';
import CartContext from './cart-context.js';

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const cartReducer = function(state, action) {
  let updatedItems;
  let updatedTotalAmount;

  if (action.type === 'ADD') {
    if (state.items.find(el => el.id === action.item.id) !== undefined) {

      const index = state.items.findIndex(el => el.id === action.item.id);
      const existingCartItem = state.items[index];

      console.log({
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      });

      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };

      updatedItems = [...state.items];
      updatedItems[index] = updatedItem;
    } else {
      updatedItems = [...state.items, action.item];
    }

    updatedTotalAmount = state.totalAmount + action.item.amount;
  }

  if (action.type === 'REMOVE') {
    if (action.item.amount <= 1) {
      updatedItems = state.items.filter(el => el.id !== action.item.id);
      updatedTotalAmount = state.totalAmount - 1;
    } else {
      const index = state.items.findIndex(el => el.id === action.item.id);
      const existingCartItem = state.items[index];

      // VERY USEFUL TRICK TO CORRECT DOUBLE VALUE BUG
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      }

      // VERY USEFUL TRICK TO CORRECT DOUBLE VALUE BUG
      // USE THIS INSTEAD OF updatedItems = state.items;
      updatedItems = [...state.items];

      // VERY USEFUL TRICK TO CORRECT DOUBLE VALUE BUG
      updatedItems[index] = updatedItem;

      updatedTotalAmount = state.totalAmount - 1;
    }
  }

  return {
    items: updatedItems,
    totalAmount: updatedTotalAmount,
  }
}

const CartProvider = function(props) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addToCartHandler = function(item) {
    dispatchCartAction({type: 'ADD', item: item});
  }

  const removeFromCartHandler = function(item) {
    dispatchCartAction({type: 'REMOVE', item: item})
  } 

  const cartContext = {
    cartState,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;
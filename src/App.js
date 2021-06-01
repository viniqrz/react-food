import React, { useState } from 'react';
import './App.css';
import MainHeader from './Components/MainHeader/MainHeader';
import Menu from './Components/Menu/Menu.js';

const DUMMY_DISHES = [
  {id: Math.random()+'', name: 'Sushi', price: 22.99, desc: 'Finest Fish and Veggies'},
  {id: Math.random()+'', name: 'Sushi', price: 22.99, desc: 'Finest Fish and Veggies'},
  {id: Math.random()+'', name: 'Sushi', price: 22.99, desc: 'Finest Fish and Veggies'},
  {id: Math.random()+'', name: 'Sushi', price: 22.99, desc: 'Finest Fish and Veggies'},
]

const DUMMY_CART = []

function App() {
  const [cart, setCart] = useState(DUMMY_CART);
  // const [amount, setAmount] = useState(1);

  const addToCartHandler = function(id, amount) {
    const item = DUMMY_DISHES.find(dish => dish.id === id);

    // setAmount(newAmount);
    setCart([ ...cart, [item, parseInt(amount)]]);

    // console.log([[item, parseInt(amount)], ...cart]);
  }

  const amountChangeHandler = function(newAmount, index) {
    setCart(cart.map((el, i) => {
      if (i === index) {
        return [el[0], newAmount];
      } else {
        return el
      }
    }))

    // console.log(cart.map((el, i) => {
    //   if (i === index) {
    //     return [el[0], newAmount];
    //   } else {
    //     return el
    //   }
    // }))
  }

  return (
    <React.Fragment>
      <MainHeader
        items={cart}
        onAmountChange={amountChangeHandler}
      />
      <Menu 
        items={DUMMY_DISHES} 
        onAddToCart={addToCartHandler}
      />
    </React.Fragment>
  );
}

export default App;

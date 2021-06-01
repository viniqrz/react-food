import './App.css';
import MainHeader from './Components/MainHeader/MainHeader';
import Menu from './Components/Menu/Menu.js';
import CartProvider from './store/CartProvider';

const DUMMY_DISHES = [
  {id: Math.random()+'', name: 'Sushi', price: 22.99, desc: 'Finest Fish and Veggies'},
  {id: Math.random()+'', name: 'Pizza', price: 14.99, desc: 'Mozzarella and Pepperoni'},
  {id: Math.random()+'', name: 'Burger', price: 8.99, desc: 'Beef and Cheese'},
  {id: Math.random()+'', name: 'Strawberry Smoothie', price: 6.99, desc: 'Strawberry and Milk'},
]

function App() {
  return (
    <CartProvider>
      <MainHeader/>
      <Menu 
        items={DUMMY_DISHES} 
      />
    </CartProvider>
  );
}

export default App;

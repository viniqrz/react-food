import { useEffect, useState } from 'react';
import './App.css';
import CartForm from './Components/CartModal/CartForm';
import MainHeader from './Components/MainHeader/MainHeader';
import Menu from './Components/Menu/Menu.js';
import CartProvider from './store/CartProvider';

// const DUMMY_DISHES = [
//   {id: Math.random()+'', name: 'Sushi', price: 22.99, desc: 'Finest Fish and Veggies'},
//   {id: Math.random()+'', name: 'Pizza', price: 14.99, desc: 'Mozzarella and Pepperoni'},
//   {id: Math.random()+'', name: 'Burger', price: 8.99, desc: 'Beef and Cheese'},
//   {id: Math.random()+'', name: 'Strawberry Smoothie', price: 6.99, desc: 'Strawberry and Milk'},
// ]

let dishes = [];

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch('https://react-food-325a6-default-rtdb.firebaseio.com/dishes.json');
      const data = await response.json();

      for (const key in data) {
        dishes.push({
          id: key,
          name: data[key].name,
          price: data[key].price,
          desc: data[key].desc
        })
      }

      setIsLoading(false);
    }

    fetchData();
  }, [setIsLoading])

  return (
    <CartProvider>
      <MainHeader/>
      <Menu 
        items={dishes} 
      >
        {
          isLoading && 
            <div className='loading'>
              <i className="fas fa-spinner"></i>
            </div>
        }
      </Menu>
    </CartProvider>
  );
}

export default App;

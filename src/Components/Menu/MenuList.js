import MenuItem from './MenuItem';
import './MenuList.css';

const MenuList = function(props) {
  return (
    <div className='menu-list'>
      {props.dishes.map(dish => (
        // key: Math.random().toString(),
        // name: dish.name,
        // desc: dish.desc,
        // price: dish.price,
        <MenuItem
          key={Math.random()+''}
          id={dish.id}
          name={dish.name}
          desc={dish.desc}
          price={dish.price}
          onTransferToCart={props.onSaveToCart}
        />
      ))}
    </div>
  )
}

export default MenuList;
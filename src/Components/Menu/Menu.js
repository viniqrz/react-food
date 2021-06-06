import './Menu.css';
import MenuList from './MenuList';

const Menu = function(props) {
  return (
    <div className='menu'>
      <MenuList dishes={props.items} onSaveToCart={props.onAddToCart}/>
      {props.children}
    </div>
  )
}

export default Menu;
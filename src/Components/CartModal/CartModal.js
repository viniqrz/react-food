import CartList from './CartList';
import './CartModal.css';

const CartModal = function(props) {
  return (
    <div className='modal-background'>
      <div className='cart-modal'>
        <CartList 
          cartItems={props.cartItems} 
          onClose={props.onCloseModal}
          onAmountChange={props.onAmountChange}>
        </CartList>
      </div>
    </div>
  )
}

export default CartModal;
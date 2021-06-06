import './CartForm.css';

const CartForm = function(props) {

  if (props.onCheckout) {
    console.log('finished');
  }

  return (
    <div className='cart-form-container'>
      <form>
          <label>Name</label>
          <input
            type='text'

          ></input>
          <label>Address</label>
          <input
            type='text'
            
          ></input>
      </form>
    </div> 
  )
} 

export default CartForm;
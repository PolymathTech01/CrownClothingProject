import './cart-dropdown.styles.scss';
import { useContext } from 'react';
import Button from '../Buttons/Button.component';
import { CartContext } from '../../contexts/carts.context';
import CartItem from '../Cart-item/Cart-item.component';
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

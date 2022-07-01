import './cart-dropdown.scss';
import Button from '../button/button';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item';

const CartDropdown = () => {
  const { cartOpen, cartItems } = useContext(CartContext);

  return (
    <div
      className='cart-dropdown-container'
      style={!cartOpen ? { display: 'none' } : {}}
    >
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropdown;

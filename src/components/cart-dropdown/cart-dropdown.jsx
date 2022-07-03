import './cart-dropdown.scss';
import Button from '../button/button';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
  const { cartOpen, cartItems } = useContext(CartContext);
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/checkout', { replace: true });
  };

  return (
    <div
      className='cart-dropdown-container'
      style={!cartOpen ? { display: 'none' } : {}}>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={handleClick}>Checkout</Button>
    </div>
  );
};

export default CartDropdown;

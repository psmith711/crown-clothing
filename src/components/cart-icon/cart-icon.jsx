import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  const { setCartOpen, cartOpen, cartQuantity } = useContext(CartContext);
  const handleCartClick = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className='cart-icon-container' onClick={handleCartClick}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartQuantity}</span>
    </div>
  );
};

export default CartIcon;

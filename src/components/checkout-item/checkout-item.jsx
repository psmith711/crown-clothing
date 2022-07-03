import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import './checkout-item.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;
  console.log(cartItem);
  return (
    <div className='checkout-item-container'>
      <img src={imageUrl} alt={name} />
      <span>
        <span onClick={() => removeItemFromCart(cartItem)}>
          <RiArrowLeftSLine />
        </span>
        {quantity}
        <span onClick={() => addItemToCart(cartItem)}>
          <RiArrowRightSLine />
        </span>
      </span>
      <span>{price}</span>
      <span>${price * quantity}</span>
    </div>
  );
};

export default CheckoutItem;

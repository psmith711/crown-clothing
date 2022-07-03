import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} cartItem={item} />;
      })}
    </div>
  );
};

export default Checkout;

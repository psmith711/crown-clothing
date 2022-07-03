import './product-card.scss';
import Button from '../button/button';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price } = product;

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{`$${price}`}</span>
      </div>
      <Button
        buttonType='inverted'
        onClick={() => {
          return addItemToCart(product);
        }}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;

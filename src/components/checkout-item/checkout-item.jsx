const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div>
      <img src={imageUrl} />
      <span>{quantity}</span>
    </div>
  );
};

export default CheckoutItem;

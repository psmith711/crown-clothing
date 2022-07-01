import { createContext, useState } from 'react';

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => null,
  cartOpen: null,
  setCartOpen: () => null,
});

const addItem = (cartItems, productToAdd) => {
  const itemExists = cartItems.find((item) => {
    return item.id == productToAdd.id;
  });
  if (itemExists) {
    return cartItems.map((item) => {
      if (item.id == productToAdd.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addItemToCart = (productToAdd) => {
    setCartItems(addItem(cartItems, productToAdd));
  };

  const value = { cartItems, addItemToCart, cartOpen, setCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

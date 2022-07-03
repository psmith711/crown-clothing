import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => null,
  cartOpen: null,
  setCartOpen: () => null,
  cartQuantity: 0,
  setCartQuantity: () => null,
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

const getInitialQuantity = (cartItems) => {
  let count = 0;
  for (var i = 0; i < cartItems.length; i++) {
    count += cartItems[i].quantity;
  }
  return count;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addItem(cartItems, productToAdd));
    //setCartQuantity(cartQuantity + 1);
  };

  useEffect(() => {
    let count = 0;
    for (var i = 0; i < cartItems.length; i++) {
      count += cartItems[i].quantity;
    }
    setCartQuantity(count);
  }, [cartItems]);

  const value = {
    cartItems,
    addItemToCart,
    cartOpen,
    setCartOpen,
    cartQuantity,
    setCartQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => null,
  cartOpen: null,
  setCartOpen: () => null,
  cartQuantity: 0,
  setCartQuantity: () => null,
  removeItemFromCart: () => null,
  deleteItemFromCart: () => null,
  cartTotal: 0,
  setCartTotal: () => null,
});

const addItem = (cartItems, productToAdd) => {
  const itemExists = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });
  if (itemExists) {
    return cartItems.map((item) => {
      if (item.id === productToAdd.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItem = (cartItems, productToRemove) => {
  const newCartItems = cartItems.map((item) => {
    if (item.id === productToRemove.id) {
      return { ...item, quantity: item.quantity - 1 };
    } else {
      return item;
    }
  });
  console.log(newCartItems);
  return newCartItems.filter((item) => {
    return item.quantity !== 0;
  });
};

const deleteItem = (cartItems, productToDelete) => {
  return cartItems.filter((item) => {
    console.log('delete');
    return item.id != productToDelete.id;
  });
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addItem(cartItems, productToAdd));
    //setCartQuantity(cartQuantity + 1);
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeItem(cartItems, productToRemove));
  };

  const deleteItemFromCart = (productToDelete) => {
    setCartItems(deleteItem(cartItems, productToDelete));
  };

  useEffect(() => {
    var count = 0;
    var total = 0;
    for (var i = 0; i < cartItems.length; i++) {
      count += cartItems[i].quantity;
      total += cartItems[i].quantity * cartItems[i].price;
    }
    setCartQuantity(count);
    setCartTotal(total);
  }, [cartItems]);

  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    cartOpen,
    setCartOpen,
    cartQuantity,
    setCartQuantity,
    cartTotal,
    deleteItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

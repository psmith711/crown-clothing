import { createContext, useState } from "react";

export const CartContext = createContext({
    cartItems: [],
    setCartItems: () => null,
    cartOpen: null,
    setCartOpen: () => null,
})

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(null);
    const [cartOpen, setCartOpen] = useState(false);
    const value = {cartItems, setCartItems, cartOpen, setCartOpen};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
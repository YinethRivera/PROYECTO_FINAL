import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) ?? []
  );

const addToCart = (product) => {
  let newCart = [];
  const existingProdut = cart.find((item) => item.id === product.id);
  if (existingProdut) {
    newCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    newCart = [...cart, { ...product, quantity: 1 }];
  }
  localStorage.setItem("cart", JSON.stringify(newCart));
  setCart(newCart);
};
  const removeFromCart = (product) => {
    setCart((prevState) => {
      const updatedCart = prevState
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // Filtra los productos con cantidad 0
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            console.log(updatedCart);
      return updatedCart;
    });
  };

  const clearCart = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart,addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

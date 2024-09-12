import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || { id_producto: [] }
  );

  console.log(cart);

  const startCart = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const addToCart = async (product) => {
    let newCart = {};
    const existingProdut = cart.id_producto?.find(
      (item) => item.id === product.id
    );

    if (existingProdut) {
      newCart = {
        ...cart,
        id_producto: cart.id_producto?.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    } else {
      newCart = {
        ...cart,
        id_producto: [
          ...(cart?.id_producto || []),
          { ...product, quantity: 1 },
        ],
      };
    }

    try {
      await fetch(`http://localhost:3000/carrito/${cart.id_carrito}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          id_producto: newCart.id_producto,
        }),
      }).then((resp) => resp.json());

      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
    } catch (error) {
      console.error("error al actualizar el carrito", error);
    }
  };

  const removeFromCart = (product) => {
    setCart((prevState) => {
      const updatedProducts = prevState.id_producto
        ?.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
      const updatedCart = { ...prevState, id_producto: updatedProducts };
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      console.log(updatedCart);
      return updatedCart;
    });
  };

  const clearCart = () => {
    const emptyCart = { id_producto: [] };
    localStorage.setItem("cart", JSON.stringify(emptyCart));
    setCart(emptyCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, startCart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export default useCart;

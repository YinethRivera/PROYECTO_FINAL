import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { AuthContext } from "../Auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [cart, setCart] = useState(
    JSON.parse(sessionStorage.getItem("cart")) || { id_producto: [] }
  );

  const startCart = (newCart) => {
    sessionStorage.setItem("cart", JSON.stringify(newCart));
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
      await fetch(`http://localhost:3000/carrito/id/${cart.id_carrito}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          id_producto: newCart.id_producto,
        }),
      }).then((resp) => resp.json());

      sessionStorage.setItem("cart", JSON.stringify(newCart));
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
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      console.log(updatedCart);
      return updatedCart;
    });
  };//put

  const clearCart = () => {
    const emptyCart = { id_producto: [] };
    sessionStorage.setItem("cart", JSON.stringify(emptyCart));
    setCart(emptyCart);
  };

  const initializeCart = async () => {
    try {
      const carrito = await fetch(
        `http://localhost:3000/carrito/uid_usuario/${user.uid}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      ).then((resp) => resp.json());
      startCart(carrito);
    } catch (error) {
      console.log("error al ingresar a la cuenta", error);
    }
  };

  useEffect(() => {
    if (!user) return;
    initializeCart();
  }, [user]);

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

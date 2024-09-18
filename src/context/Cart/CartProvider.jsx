import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { AuthContext } from "../Auth/AuthContext";

export const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [cart, setCart] = useState(
    JSON.parse(sessionStorage.getItem("cart")) || { id_producto: [] }
  );

  //inicia el carrito
  const startCart = (newCart) => {
    sessionStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  //agrega y revisa si ya está el producto
  const addToCart = async (product) => {
    let newCart = {};
    const existingProduct = cart.id_producto?.find(
      (item) => item.id === product.id
    );
    //si ya está aumenta
    if (existingProduct) {
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

    //envia los cambios, carrito a la base pgAdmin
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
      console.error("Error al actualizar el carrito", error);
    }
  };

  //quita

  const removeFromCart = async (product) => {
    setCart((prevState) => {
      const updatedProducts = prevState.id_producto
        ?.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
      const updatedCart = { ...prevState, id_producto: updatedProducts };

      // Actualizar la base de datos
      fetch(`http://localhost:3000/carrito/id/${prevState.id_carrito}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          id_producto: updatedCart.id_producto,
        }),
      })
        .then((resp) => resp.json())
        .catch((error) =>
          console.error("Error al actualizar el carrito", error)
        );

      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      console.log(updatedCart);
      return updatedCart;
    });
  };

  //Vacía el carrito, lo actualiza en pgAdmin
  // y almacena la sesión

  const clearCart = async () => {
    const emptyCart = { id_producto: [] };

    try {
      await fetch(`http://localhost:3000/carrito/id/${cart.id_carrito}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(emptyCart),
      }).then((resp) => resp.json());
    } catch (error) {
      console.error("Error al vaciar el carrito", error);
    }

    sessionStorage.setItem("cart", JSON.stringify(emptyCart));
    setCart(emptyCart);
  };

  //Obtiene el carrito del servidor 
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
      console.log("Error al ingresar a la cuenta", error);
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

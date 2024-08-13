import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Carrito from "../Carrito/Carrito";

const CartIcon = () => {
  const { cart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  // Contar la cantidad total de productos en el carrito
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <i
        className="bi bi-cart"
        style={{ fontSize: "24px", cursor: "pointer" }}
        onClick={() => setShowCart(!showCart)}
      ></i>
      {totalItems > 0 && (
        <span
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            background: "red",
            color: "white",
            borderRadius: "50%",
            padding: "0 6px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          {totalItems}
        </span>
      )}
      {showCart && (
        <div
          style={{
            position: "fixed", // Cambia de absolute a fixed
            top: "50%", // Centramos verticalmente
            left: "50%", // Centramos horizontalmente
            transform: "translate(-50%, -50%)", // Ajustamos el contenedor al centro exacto
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
            padding: "10px",
            zIndex: 1000,
            width: "300px", // Ajusta el ancho según tus necesidades
            maxHeight: "400px", // Limita la altura del carrito
            overflowY: "auto", // Agrega barra de desplazamiento si el contenido es grande
          }}
        >
          <Carrito />
        </div>
      )}
    </div>
  );
};

export default CartIcon;

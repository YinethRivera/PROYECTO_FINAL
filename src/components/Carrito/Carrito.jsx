import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Carrito.css"

const Carrito = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((product, idx) => (
            <div className="carritoCo"
              key={idx}
              style={{

              }}
            >
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <p>Cantidad: {product.quantity}</p>
              <button onClick={() => removeFromCart(product)}>
                Eliminar del carrito
              </button>
            </div>
          ))}
          <button onClick={() => clearCart()}>Vaciar carrito</button>
        </div>
      )}
    </div>
  );
};

export default Carrito;

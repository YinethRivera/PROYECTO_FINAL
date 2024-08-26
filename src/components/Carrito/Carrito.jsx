import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Carrito.css";

const Carrito = ({ cerrarCarrito }) => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div>
      <span className="cerrarCarr" onClick={cerrarCarrito}>
        x
      </span>

      <div className="carrito-contenedor">
        {cart.length === 0 ? (
          <div className="no-productos">
            <p> no hay productos c:</p>
          </div>
        ) : (
          <>
            <div className="contenido">
              {cart.map((product, idx) => (
                <div className="carritoCo" key={idx} style={{}}>
                  <img
                    className="tamaños"
                    src={product.image}
                    alt={product.name}
                  />
                  {/* <h3>{product.image}</h3> */}
                  <p>
                    {product.description.length > 50
                      ? `${product.description.slice(0, 50)}...`
                      : product.description}
                  </p>

                  <p>{product.price}</p>
                  <p>Cantidad: {product.quantity}</p>
                  <button onClick={() => removeFromCart(product)}>
                    Eliminar del carrito
                  </button>
                </div>
              ))}
              <button onClick={() => clearCart()}>Vaciar carrito</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Carrito;

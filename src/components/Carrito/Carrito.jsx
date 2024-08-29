import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./Carrito.css";

const Carrito = ({ cerrarCarrito }) => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate(); // Usa useNavigate para la redirección


    const handleCompra = () => {
      // Lógica adicional para la compra si es necesario
      navigate("/gracias"); // Redirige a la página de "Gracias"
    };

  return (
    <div>
      <span className="cerrarCarr" onClick={cerrarCarrito}>
        x
      </span>

      <div className="">
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
              <button onClick={handleCompra}>Comprar</button> 
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Carrito;

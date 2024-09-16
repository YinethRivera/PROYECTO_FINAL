import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/Cart/CartContext";
import { useNavigate } from "react-router-dom";
import "./Carrito.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/credenciales";

const Carrito = ({ cerrarCarrito }) => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [User, setUser] = useState(null);

  // Controlar autenticación del usuario
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // si haqy Usuario
      } else {
        setUser(null); // No hay
      }
    });

    return () => unsubscribe();
  }, []);

  const handleCompra = () => {
    if (User) {
      navigate("/gracias");
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <span className="cerrarCarr" onClick={cerrarCarrito}>
        x
      </span>

      <div className="">
        {cart.id_producto?.length === 0 ? (
          <div className="no-productos">
            <p>No hay productos c:</p>
          </div>
        ) : (
          <>
            <div className="contenido">
              {cart.id_producto?.map((product, idx) => (
                <div className="carritoCo" key={idx}>
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

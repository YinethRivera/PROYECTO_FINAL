import React, { useContext, useState } from "react";
import { CartContext } from "../../context/Cart/CartContext";
import Carrito from "../Carrito/Carrito";
import styles from "./CartIcon.module.css";
import useCart from "../../context/Cart/CartProvider";

const CartIcon = () => {
  const { cart } = useCart();
  const [showCart, setShowCart] = useState(false);

  const totalItems = cart?.id_producto.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cerrarCarrito = () => {
    setShowCart(!showCart);
  };

  return (
    <div className={styles.iconWrapper}>
      <span
        className={`bi bi-cart4 ${styles.cartIcon}`}
        aria-label="Cart"
        onClick={cerrarCarrito}
      ></span>
      {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
      {showCart && (
        <div className={styles.cartDropdown}>
          <Carrito cerrarCarrito={cerrarCarrito} />
        </div>
      )}
    </div>
  );
};

export default CartIcon;

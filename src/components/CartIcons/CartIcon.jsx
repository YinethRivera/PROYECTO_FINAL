import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Carrito from "../Carrito/Carrito";
import styles from "./CartIcon.module.css";

const CartIcon = () => {
  const { cart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={styles.iconWrapper}>
      <i
        className={`bi bi-cart4 ${styles.cartIcon}`}
        aria-label="Cart"
        onClick={() => setShowCart(!showCart)}
      ></i>
      {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
      {showCart && (
        <div className={styles.cartDropdown}>
          <Carrito />
        </div>
      )}
    </div>
  );
};

export default CartIcon;

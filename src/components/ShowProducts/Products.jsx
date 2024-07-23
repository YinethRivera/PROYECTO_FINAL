import styles from "./show_products.module.css";
import React, { useState } from "react";

const Product = ({
  id,
  image,
  title,
  description,
  price,
  rating,
  setnum,
  num,
}) => {
  const [first, setfirst] = useState(true);
  return (
    <div className={styles.product_card}>
      <img src={image} alt={title} />
      <div className={styles.product_data}>
        <h3>{title}</h3>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        <div className={styles.product_numbers}>
          <p className={styles.price}>
            ${price}{" "}
            <span className={styles.price_before}>
              ${(price * 1.5).toFixed(2)}
            </span>
          </p>
          <div className={styles.rating}>{rating?.rate || ""}</div>
        </div>
      </div>
      {first && (
        <button
          onClick={() => {
            setfirst(false);
            setnum(num + 1);
            console.log(num);
          }}
          className={styles.btn_Comprar}
        >
          Comprar
        </button>
      )}
    </div>
  );
};

export default Product;

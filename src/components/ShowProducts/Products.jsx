import styles from "./show_products.module.css";
import React from "react";
// import "./Product.css";

const Product = ({ id, image, title, description, price, rating }) => {
  return (
    <div className={styles.product_card}>
      <img src={image} alt="" />
      <div className={styles.product_data}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.product_numbers}>
          <p className={price}>
            ${price}{" "}
            <span className={styles.price_before}>{price + price / 2}</span>{" "}
          </p>
          <p className={rating}>{rating?.rate | ""}</p>
        </div>
      </div>
      <button>Comprar</button>
    </div>
  );
};

export default Product;

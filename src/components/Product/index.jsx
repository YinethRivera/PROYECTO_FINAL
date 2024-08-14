import React, { useContext } from "react";
import {CartContext} from "../../context/CartContext";
import "./Product.css";

const Product = ({ image, title, description, price}) => {
  const {addToCart} = useContext(CartContext);

const handleClick = () => {
const product = { image, title, description, price, id: title }; // Aquí asumimos que el título es único para simplificar
 addToCart(product);

  };
return (
    <div className="product-card">
      <div className="portada">
        <img src={image} alt={title} className="product-image" />
      </div>
      <div className="product-data">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="product-numbers">
        <p className="price">
          ${price}{" "}
          <span className="price-before">
            {" "}
            ${(price + price / 2).toFixed(2)}
          </span>
        </p>

      </div>
      <div className="div_btn-comprar">
        <button onClick={handleClick} className="b-comprar">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Product;


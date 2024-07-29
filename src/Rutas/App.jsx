import { useEffect, useState } from "react";
import Button from "../components/Button/index.jsx";
import Menu from "../components/Menu/Header";
import Product from "../components/Product";
import { useFetch } from "../hook/useGetProducts.js";

export default function App() {
  const { data: electronics } = useFetch(
    "https://fakestoreapi.com/products/category/electronics"
  );

  const { data: jewelery } = useFetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );

  const { data: mensClothing } = useFetch(
    "https://fakestoreapi.com/products/category/men's%20clothing"
  );

  const { data: womensClothing } = useFetch(
    "https://fakestoreapi.com/products/category/women's%20clothing"
  );

  return (
    <>
      <Menu />
      <div className="category-container" name="jewelery">
        <h1>jewelery</h1>
        <div className="category-items">
          {jewelery.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
      <div className="category-container" name="electronics">
        <h1>Electronics</h1>
        <div className="category-items">
          {electronics.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
      <div className="category-container" name="mensclothing">
        <h1>Men's Clothing</h1>
        <div className="category-items">
          {mensClothing.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
      <div className="category-container" name="womensclothing">
        <h1>Women's Clothing</h1>
        <div className="category-items">
          {womensClothing.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}

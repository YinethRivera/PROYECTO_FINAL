import { useEffect, useState } from "react";
import { useFetch } from "../Products/Get_products";
import Product from "../Products/Product.jsx";
import styles from "../../styles/show.products.module.css";

export default function Show_products() {
  const { data: jewelery } = useFetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  const { data: electronics } = useFetch(
    "https://fakestoreapi.com/products/category/electronics"
  );
  const { data: mensClothing } = useFetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  );
  const { data: womensClothing } = useFetch(
    "https://fakestoreapi.com/products/category/women's clothing"
  );
  const [num, setnum] = useState(0);

  useEffect(() => {
    console.log("hola");
  }, []);

  return (
    <>
      <div className={styles.div_categorias}>
        <h1>Jewelery</h1>
        <div className={styles.Categorias_Div}>
          {jewelery.map((product, index) => (
            <Product key={index} {...product} setnum={setnum} num={num} />
          ))}
        </div>
      </div>
      <div className={styles.div_categorias}>
        <h1>Electronics</h1>
        <div className={styles.Categorias_Div}>
          {electronics.map((product, index) => (
            <Product key={index} {...product} setnum={setnum} num={num} />
          ))}
        </div>
      </div>
      <div className={styles.div_categorias}>
        <h1>Men's Clothing</h1>
        <div className={styles.Categorias_Div}>
          {mensClothing.map((product, index) => (
            <Product key={index} {...product} setnum={setnum} num={num} />
          ))}
        </div>
      </div>
      <div className={styles.div_categorias}>
        <h1>Women's Clothing</h1>
        <div className={styles.Categorias_Div}>
          {womensClothing.map((product, index) => (
            <Product key={index} {...product} setnum={setnum} num={num} />
          ))}
        </div>
      </div>
    </>
  );
}

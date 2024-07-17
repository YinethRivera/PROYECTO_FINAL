import { useFetch } from "../Get_products";
import Product from "./Products";
import styles from "./show_products.module.css";
export default function Show_products() {
  const { data: jewelery } = useFetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  const { data: electronic } = useFetch(
    "https://fakestoreapi.com/products/category/electronics"
  );
  const { data: mensclothing } = useFetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  );
  const { data: womensclothing } = useFetch(
    "https://fakestoreapi.com/products/category/women's clothing"
  );
  return (
    <>
      <div className={styles.div_categorias}>
        <h1>jewelery</h1>
        <div>
          {jewelery.map((product, index) => {
            return <Product key={index} {...product} />;
          })}
        </div>
      </div>
      <div className={styles.div_categorias}>
        <h1>electronic</h1>
        <div>
          {electronic.map((product, index) => {
            return <Product key={index} {...product} />;
          })}{" "}
        </div>
      </div>
      <div className={styles.div_categorias}>
        <h1>mensclothing</h1>
        <div>
          {mensclothing.map((product, index) => {
            return <Product key={index} {...product} />;
          })}{" "}
        </div>
      </div>
      <div className={styles.div_categorias}>
        <h1>womensclothing</h1>
        <div>
          {womensclothing.map((product, index) => {
            return <Product key={index} {...product} />;
          })}{" "}
        </div>
      </div>
    </>
  );
}

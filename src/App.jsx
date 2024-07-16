import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Get_products from "./components/Get_products";
import Navegacion from "./components/navegacion";

function App() {
  let [products, setproducts] = useState([]);

  const funcion = async () => {
    const produsct = await Get_products();
    setproducts(produsct);
    // return produsct;
  };

  useEffect(() => {
    // let res =
    funcion();
  }, []);

  return (
    <>
    <Navegacion/>
      <h1>mi tinda Proyecto</h1>
      {products.map((e) => (
        <div key={e.id}>
          <h2>{e.title}</h2>
         <p>{e.description}</p>
         <p>{e.price}</p>
          <img src={e.image} alt={e.title} />
        </div>
      ))}
    </>
  );
}

export default App;

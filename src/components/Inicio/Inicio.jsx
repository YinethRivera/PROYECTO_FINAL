import styles from "../../styles/show.products.module.css";
import Show_products from "../ShowProducts/Show_products.jsx";
import Navegacion from "../Navegacion/Navegacion.jsx";

function Inicio() {
  return (
    <>
      <Navegacion />
      <h1 className="nombre">Yikart</h1>
      <p className="texto">¡¡Encuentra la pieza perfecta para ti!!</p>
      <Show_products />
    </>
  );
}

export default Inicio;

import Login from "../Login/Login.jsx";
// import imagen from "";
import styles from "../../styles/show.products.module.css";


export default function Navegacion() {
  return (
    <>
      <header>
        <nav className="listaNav">
          {/* <img className="logo" src={} alt="h" /> */}
          <h3>Ropa Caballero</h3>
          <h3>Ropa Dama</h3>
          <h3>Accesorios</h3>
          <h3>Tecnologia</h3>
          <Login />
        </nav>

        <button className="menuBoton">&#9776;</button>
      </header>
    </>
  );
}

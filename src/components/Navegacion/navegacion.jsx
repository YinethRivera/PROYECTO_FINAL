import Login from "../Navegacion/navegacion.jsx";
import img from '../Login/Login.jsx';
import './navegacion.css'

export default function Navegacion() {
  return (
    <>
      <header className="navegacion">
        <nav className="listaNav">
        <img className="logo"  src={img} alt="h" />
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

import React, { useState } from "react";
import "./Header.css";
import Img from "../../assets/Logo.png";
import { Link } from "react-scroll";
import CartIcon from "../CartIcons/CartIcon";

function Header() {
  const [activo, setactivo] = useState(false);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  return (
    <div className="contenido">
      <header className="header">
        <div className="container">
          <img className="logo" src={Img} />
          <nav className="nav">
            <Link to="electronics" smooth={true} duration={200}>
              Electronics
            </Link>
            <Link to="jewelery" smooth={true} duration={200}>
              jewelery
            </Link>
            <Link to="mensclothing" smooth={true} duration={200}>
              Men\'s Clothing
            </Link>
            <Link to="womensclothing" smooth={true} duration={200}>
              Women\'s Clothing
            </Link>
          </nav>

          {mostrarFormulario && (
            <div className="formulario">
              <form>
                <div className="user">
                  <label htmlFor="usuario">Usuario: </label>
                  <input
                    type="text"
                    id="usuario"
                    name="usuario"
                    placeholder="Ingresa tu Email"
                  />
                </div>

                <div className="user">
                  <label htmlFor="contrasena">Contraseña: </label>
                  <input
                    type="password"
                    id="contrasena"
                    name="contraseña"
                    placeholder="Ingresa tu contraseña"
                  />
                </div>
                <button type="submit">Ingresar</button>
              </form>
            </div>
          )}
        </div>

        <button className="btn-ini-sesion" onClick={toggleFormulario}>
          {" "}
          <button type="submit">Login</button>
        </button>

        <div className="carrito">
          <CartIcon />
        </div>

        {
          <button className="class-menu-btn" id="menu-btn">
            &#9776;
          </button>
        }
      </header>
    </div>
  );
}

export default Header;

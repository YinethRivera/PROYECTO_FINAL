import React, { useState } from "react";
import "./Header.css";
import Img from "../../assets/Logo.png";
import { Link } from "react-scroll";

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
            {activo && (
              <div className="">
                <h1>hola</h1>
              </div>
            )}
          </nav>

          {mostrarFormulario && (
            <div className="formulario">
              <form>
                <div className="campo">
                  <label htmlFor="usuario">User</label>
                  <input type="text" id="usuario" name="usuario" />
                </div>

                <div className="campo">
                  <label htmlFor="contrasena">Password</label>
                  <input type="password" id="contrasena" name="contrasena" />
                </div>

                <button type="submit">Login</button>
              </form>
            </div>
          )}
        </div>

        <button className="btn-ini-sesion" onClick={toggleFormulario}>
          {" "}
          <button type="submit">Login</button>
        </button>

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

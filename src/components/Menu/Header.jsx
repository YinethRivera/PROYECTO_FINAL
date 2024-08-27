import React, { useState } from "react";
import "./Header.css";
import Img from "../../assets/Logo.png";
import { Link } from "react-scroll";
import CartIcon from "../CartIcons/CartIcon";
import { Outlet, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/credenciales";

function Header() {
  const [activo, setactivo] = useState(false);

  const CerrarSesion = async () => {
    try {
      await signOut(auth);
      console.log("se cerro la sesion");
    } catch (error) {
      console.log("No se cerro la sesion");
    }
  };
  const navigate = useNavigate();
  const ira = () => {
    navigate("/login");
  };
  return (
    <div className="contenido">
      <header className="header">
        <div className="container">
          <img className="logo" src={Img} />
          <nav className="nav">
            <Link to="electronics" smooth={true} duration={200}>
              Tecnologia
            </Link>
            <Link to="jewelery" smooth={true} duration={200}>
              Joyería
            </Link>
            <Link to="mensclothing" smooth={true} duration={200}>
              Ropa de hombre
            </Link>
            <Link to="womensclothing" smooth={true} duration={200}>
              Ropa de mujer
            </Link>
          </nav>
        </div>
        <button onClick={ira}>Ingresar</button>


        <button onClick={CerrarSesion}>Cerrar Sesion </button>

        <div className="carrito">
          <CartIcon />
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Header;

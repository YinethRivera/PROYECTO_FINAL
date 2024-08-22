import React, { useState } from "react";
import "./Header.css";
import Img from "../../assets/Logo.png";
import { Link } from "react-scroll";
import CartIcon from "../CartIcons/CartIcon";
import { Outlet, useNavigate } from "react-router-dom";

function Header() {
  const [activo, setactivo] = useState(false);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };
const navigate = useNavigate()
const ira = ()=>{
  navigate('/login')
}
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

         
        </div>
        <button onClick={ira}>Ingresar</button>

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
      <Outlet />
    </div>
  );
}

export default Header;

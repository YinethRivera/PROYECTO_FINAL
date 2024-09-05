import React, { useContext, useState } from "react";
import "./Header.css";
import Img from "../../assets/Logo.png";
import { Link } from "react-scroll";
import CartIcon from "../CartIcons/CartIcon";
import { Outlet, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/credenciales";
import { UserContext } from "../../context/UserContext";
import setAuthSession from "../../utils/set-auth-session";

function Header() {
  const { user, setUser } = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const CerrarSesion = async () => {
    try {
      await signOut(auth);
      setUser(null);
      sessionStorage.removeItem('AUTH')
      console.log("se cerro la sesion");
    } catch (error) {
      console.log("No se cerro la sesion");
    }
  };

  const handleUserProfile = () => {
    navigate("/userprofile");
    setDropdownOpen(false);
  };

  const handleSignOut = () => {
    CerrarSesion();
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

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

        <div className="carrito">
          <CartIcon />
        </div>
        <div className="registeredUser">
          {user ? (
            <div className="dropdown">
              <button className="dropdown-toggle" onClick={toggleDropdown}>
                {user.email}
              </button>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <button onClick={handleUserProfile}>Perfil</button>
                  <button onClick={handleSignOut}>Cerrar Sesión</button>
                </div>
              )}
            </div>
          ) : (
            <button onClick={ira}>Ingresar</button>
          )}
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Header;

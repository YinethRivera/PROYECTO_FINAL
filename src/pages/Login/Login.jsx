import { useContext, useEffect, useState } from "react";
import "./Login.css";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/credenciales";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/Cart/CartContext";
import { AuthContext } from "../../context/Auth/AuthContext";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { startSession, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRedirectApp = () => {
    navigate("/formulario");
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  const handlerLogin = (e) => {
    e.preventDefault();
    startSession(Email, Password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="welcome-message">Bienvenido</h2>
        <form onSubmit={handlerLogin}>
          <div className="input-group">
            <label htmlFor="usuario">Usuario: </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu Email"
            />
          </div>

          <div className="input-group">
            <label htmlFor="contrasena">Contraseña: </label>
            <input
              type="password"
              id="contrasena"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              name="contraseña"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <button type="submit" className="submit-button">
            Ingresar
          </button>
          <p>¿Aun no estás registrado? </p>
          <button type="button" onClick={handleRedirectApp}>
            Registrate
          </button>
        </form>
      </div>
    </div>
  );
}

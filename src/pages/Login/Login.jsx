import { useContext, useEffect, useState } from "react";
import "./Login.css";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/credenciales";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!!user) {
        setUser(user);
        console.log("usuario encontrado", user);
        navigate("/");
      } else {
        console.log("usuario no encontrado");
      }
    });
    return () => unsubscribe();
  }, []);

  const ingresarUser = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, Email, Password);
      console.log("ingresaste a la cuenta");
      navigate("/");
    } catch (error) {
      console.error("Error al ingresar a la cuenta", error);
      alert("Error al intentar iniciar sesión: " + error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="welcome-message">Bienvenido</h2>
        <form onSubmit={ingresarUser}>
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
          <a href="/formulario">
            <button type="button">registrate</button>
          </a>
        </form>
      </div>
    </div>
  );
}

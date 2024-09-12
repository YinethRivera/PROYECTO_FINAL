import { useContext, useEffect, useState } from "react";
import "./Login.css";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/credenciales";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [users, setUsers] = useState(null);
  const navigate = useNavigate();
  const { startCart } = useContext(CartContext);

  const handleRedirectApp = () => {
    navigate("/formulario");
  };

  useEffect(() => {
    onAuthStateChanged(auth, (users) => {
      if (users) {
        setUsers(users);
        console.log("usuario encontrado");
      } else {
        console.log("usuario no encontrado");
      }
    });
  }, []);

  const ingresarUser = async (e) => {
    e.preventDefault();
    try {
      const resp = await signInWithEmailAndPassword(auth, Email, Password);
      const carrito = await fetch(
        `http://localhost:3000/carrito/${resp.user.uid}`,
        {
          method: "GET",
          headers: { "Content-type": "application/json" },
        }
      ).then((resp) => resp.json());
      startCart(carrito);
      navigate("/"); // Redirigir  después de iniciar sesión
    } catch (error) {
      console.log("error al ingresar a la cuenta", error);
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
          <button type="button" onClick={handleRedirectApp}>
            Registrate
          </button>
        </form>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/credenciales";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [users, setUsers] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
        console.log("usuario encontrado");
      } else {
        console.log("usuario no encontrado");
      }
    });
  }, []);

  const RegisterUser = async (e) => {
    e.preventDefault();

    try {
      const UsuarioCredenciales = await createUserWithEmailAndPassword(
        auth,
        Email,
        Password
      );
      const User = UsuarioCredenciales.user;
      await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          uid_usuario: User.uid,
          correo_electronico: Email,
        }),
      });
    } catch (error) {
      console.log("error al crear cuenta", error);
    }
  };

  const [registrar, setRegistrar] = useState(false);
  const ingresarUser = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, Email, Password);
      console.log("ingresaste a la cuenta");
    } catch (error) {
      console.log("error al ingresar a la cuenta", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="welcome-message">Bienvenido</h2>
        <form
          onSubmit={(e) => {
            registrar ? RegisterUser(e) : ingresarUser(e);
          }}
        >
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
          <p>¿Aun no estás registrado? </p>
          <button type="button" onClick={() => setRegistrar(!registrar)}>
            {registrar ? "ingresa" : "registrate"}
          </button>

          <button type="submit" className="submit-button">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

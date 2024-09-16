import React, { useState } from "react";
import "./formulario.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/credenciales";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useCart from "../../context/Cart/CartProvider";

const RegistroForm = () => {
  const { startCart } = useCart();
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    telefono: "",
    correoElectronico: "",
    contraseña: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const { nombreCompleto, telefono, correoElectronico, contraseña } =
      formData;
    if (!nombreCompleto || !telefono || !correoElectronico || !contraseña) {
      setErrorMessage("Todos los campos son obligatorios.");
      return false;
    }
    if (contraseña.length < 6) {
      setErrorMessage("La contraseña debe tener al menos 6 caracteres.");
      return false;
    }
    return true;
  };

  const RegisterUser = async () => {
    const { correoElectronico, contraseña, nombreCompleto, telefono } =
      formData;

    try {
      const UsuarioCredenciales = await createUserWithEmailAndPassword(
        auth,
        correoElectronico,
        contraseña
      );

      const User = UsuarioCredenciales.user;
      await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          uid_usuario: User.uid,
          correo_electronico: correoElectronico,
          nombre_completo: nombreCompleto,
          telefono: telefono,
        }),
      });

      const resp = await fetch("http://localhost:3000/carrito", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          id_producto: [],
          id_usuario: User.uid,
        }),
      }).then((resp) => resp.json());

      startCart(resp);

      setFormData({
        nombreCompleto: "",
        correoElectronico: "",
        telefono: "",
        contraseña: "",
      });

      navigate("/"); // Redirige
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("El usuario ya está registrado.");
      } else {
        setErrorMessage("Error al crear la cuenta: " + error.message);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      RegisterUser();
    }
  };

  return (
    <div className="contenedor-formulario">
      <h2>Registro de Usuario</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}{" "}
      <form onSubmit={handleSubmit}>
        <div className="grupo-formulario">
          <label htmlFor="nombreCompleto">Nombre Completo</label>
          <input
            type="text"
            id="nombreCompleto"
            name="nombreCompleto"
            value={formData.nombreCompleto}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grupo-formulario">
          <label htmlFor="correoElectronico">Correo Electrónico</label>
          <input
            type="email"
            id="correoElectronico"
            name="correoElectronico"
            value={formData.correoElectronico}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grupo-formulario">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grupo-formulario">
          <label htmlFor="contraseña">Contraseña</label>
          <div className="input-contraseña">
            <input
              type={showPassword ? "text" : "password"}
              id="contraseña"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
              required
            />
            <span onClick={togglePasswordVisibility} className="icono-ojito">
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegistroForm;

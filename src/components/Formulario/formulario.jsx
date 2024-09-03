import React, { useState } from "react";
import "./formulario.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/credenciales";



const RegistroForm = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    correoElectronico: "",
    telefono: "",
    contraseña: "",
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const RegisterUser = async (e) => {
    const { correoElectronico, contraseña } = formData;

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
        }),
      });
      alert("Registro de usuario exitoso!");
      setFormData({
        nombreCompleto: "",
        correoElectronico: "",
        telefono: "",
        contraseña: "",
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("El usuario ya está registrado.");
      } else {
        console.log("Error al crear cuenta", error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    RegisterUser();
    console.log("Datos del formulario:", formData);
  };

  return (
    <div className="contenedor-formulario">
      <h2>Registro de Usuario</h2>
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
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegistroForm;

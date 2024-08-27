import React, { useState } from "react";
import "./formulario.css"

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

  const handleSubmit = (e) => {
    e.preventDefault();
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

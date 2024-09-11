    import React from 'react'
    
    export const PerfilUsuario = () => {
        try {
    const UsuarioCredenciales = await createUserWithEmailAndPassword(
      auth,
      uid_usuario,
      nombre_completo,
      correoElectronico,
      contraseña,
      telefono,

    ),
    const Usuarios= UsuarioCredenciales.user;
    await fetch("http://localhost:3000/usuarios", {
      method: "GET",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
    uid_usuario:uid_usuario,
    nombre_completo: nombre,
    correo_electronico: correoElectronico,
    telefono: telefono


      }),
    })
      return (
        <div>PerfilUsuario</div>
      )
    }
    
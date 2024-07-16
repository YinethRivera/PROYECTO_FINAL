import { useEffect, useState} from "react";
 
export default function login() {
    const [activo, setactivo]= useState(false);

  return (
    <>
      <button
        className="button"
        onClick={(e) => {
          setactivo(true);
        }}
      >
        INICIAR SESION
      </button>
      {activo && (
        <div className="container-login">
          setactivo(true);
          <div className="modal" onClick={() => setactivo(false)}/>
            <div className="formulario"/>
            <h2>Iniciar sesion</h2>
            <form>
                <input type="email" placeholder="Ingresa tu correo"/> 
                <input type="password" placeholder="Contraseña"/>
                <button className="botonC" type="button" value="iniciar sesion"> Iniciar sesion</button>
                <a href=""></a>




 
            </form>


        


        </div>
      )}
    </>
  );
}

import React from "react";

const gracias = () => {
  return (
    <div>
      <h1>¡Gracias por tu compra!</h1>
      <p>
        Tu pedido ha sido recibido y está siendo procesado. 
        Te estará llegando dentro de los proximos 5 dias.
        ¡¡muchas gracias por confiar en Yikat!!
      </p>
      <p>
        Esperamos que disfrutes de tu compra. 
        Te esperamos pronto
      </p>
      <button
        onClick={() => (window.location.href = "/")} //para que recargue la pagina 
      >
        Volver a la tienda
      </button>
    </div>
  );
};
export default gracias;
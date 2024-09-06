import React from "react";
import "./gracias.css"
import Instagram from "../../assets/instagram.jpg"

export const Gracias = () => {
  return (
    <div className="gracias-container">
      <h1>¡Gracias por tu compra!</h1>
      <p>
        Tu pedido ha sido recibido y está siendo procesado. Te estará llegando
        dentro de los próximos 5 días. ¡¡Muchas gracias por confiar en Yikart!!
      </p>
      <p>Esperamos que disfrutes de tu compra. ¡Te esperamos pronto!</p>

      <div className="imagenInstagram">
        <img src={Instagram} alt="" />
      </div>
      <button onClick={() => (window.location.href = "/")}>
        Volver a la tienda
      </button>

      <div className="redes">
        <h1>
          <a
            className="instagram_facebook"
            href="https://www.instagram.com/yikart.03?igsh=MW0weDZnaGoyd2dkeQ=="
          >
            instagram
          </a>
        </h1>
        <a>Recuerda seguirnos en nuetras redes sociales c:</a>

        <h1>
          <a
            className="instagram_facebook"
            href="https://www.facebook.com/share/17rTfhVsAq/?mibextid=qi2Omg"
          >
            Facebook
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Gracias;

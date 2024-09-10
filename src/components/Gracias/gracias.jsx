import React from "react";
import "./gracias.css";
import Instagram from "../../assets/instagram.jpg";

export const Gracias = () => {
  return (
    <div className="gracias-container">
      <h1>¡Gracias por tu compra!</h1>
      <p>
        "¡Gracias por tu compra! Nos complace informarte que hemos recibido tu
        pedido y actualmente está siendo procesado con el mayor cuidado y
        atención. Te estará llegando dentro de los próximos 5 días. ¡¡Muchas
        gracias por confiar en Yikart!!
      </p>
      <p>
        ¡Muchas gracias por elegirnos y esperamos verte nuevamente pronto en
        Yikart!"
      </p>

      <button onClick={() => (window.location.href = "/")}>
        Volver a la tienda
      </button>

      <div className="redes">
        <h1>
          <a
            className="instagram_facebook"
            href="https://www.facebook.com/share/17rTfhVsAq/?mibextid=qi2Omg"
          >
            Facebook
          </a>
        </h1>
        <h1>
          <a
            className="instagram_facebook"
            href="https://www.instagram.com/yikart.03?igsh=MW0weDZnaGoyd2dkeQ=="
          >
            Instagram
          </a>
        </h1>
        <div className="imagenInstagram">
          <img src={Instagram} alt="Instagram" />
        </div>

        <a className="texto_final">
          En Yikart, valoramos mucho tu confianza y queremos que disfrutes de tu
          nueva adquisición al máximo. Si tienes alguna duda o necesitas más
          información, no dudes en contactarnos.
        </a>
      </div>
    </div>
  );
};

export default Gracias;

import React from "react";
import ReactDOM from "react-dom/client";
import { CartProvider } from "./context/CartProvider";
import "./App.css"
import Router from "./Rutas/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <Router />
    </CartProvider>
  </React.StrictMode>
);

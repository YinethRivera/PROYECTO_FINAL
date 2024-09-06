import React from "react";
import ReactDOM from "react-dom/client";
import { CartProvider } from "./context/CartProvider";
import "./App.css";
import Router from "./Rutas/Router";
// import { UserProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <UserProvider> */}
      <CartProvider>
        <Router />
      </CartProvider>
    {/* </UserProvider> */}
  </React.StrictMode>
);

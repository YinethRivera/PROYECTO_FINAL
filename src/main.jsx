import React from "react";
import ReactDOM from "react-dom/client";
import { CartProvider } from "./context/Cart/CartProvider";
import "./App.css";
import AppRouter from "./Rutas/AppRouter";
import AuthProvider from "./context/Auth/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </CartProvider>
  </React.StrictMode>
);

import React from "react";
import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Registro/Register.jsx";
import Inicio from "./components/Inicio/Inicio.jsx";
import styles from "./styles/show.products.module.css";

function App() {
  return (
    <BrowserRouter>
      <React.Suspense>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Inicio />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;

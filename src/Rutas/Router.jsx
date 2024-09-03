import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "../pages/Login/Login";
import Formulario from "../components/Formulario/formulario";
import Gracias from "../components/Gracias/Gracias";
import UserProfile from "../components/PerfilUsuario/UserProfile";




export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Formulario" element={<Formulario />} />
        <Route path="/gracias" element={<Gracias />} />
        <Route path="/UserProfile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

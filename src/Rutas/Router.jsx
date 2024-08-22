import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "../pages/Login/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

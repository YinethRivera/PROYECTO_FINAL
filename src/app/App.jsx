import "./App.css";
import Show_products from "../components/ShowProducts/Show_products";
import Navegacion from "../components/Navegacion/navegacion";
import Productos from "../components/Productos/Products";
import Registro from "../components/Registro/Register";
function App() {
  return (
    <>
      <Navegacion />
      <h1 className="nombre">Yikart</h1>
      <p className="texto">¡¡Encuentra la pieza perfecta para ti!!</p>
      <Show_products />
    </>
  );
}

export default App;

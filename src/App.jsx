import "./App.css";
import Navegacion from "./components/navegacion";
import Show_products from "./components/ShowProducts/Show_products";

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

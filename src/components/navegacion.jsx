import login from ",/Login";

export default function Navegacion() {
  return (
    <>
    <header className="navegacion">
        <nav className="listaNav">
            <a href="#">Ropa Caballero</a>
            <a href="#">Ropa Dama</a>
            <a href="#">Accesorios</a>
            <a href="#">Tecnologia</a>
            <a href="#">login.html</a>
            <Login/>
        </nav>
    
        <button className="menuBoton">&#9776;</button>
    
    </header>
    </>
  )
}

import "./App.css";
import ContenedorColumnas from "./components/Contenedor-Columnas";
import PieDePagina from "./components/Footer";
import Contenido from "./components/ItemListContainer";
import BarraNav from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BarraNav />
      <Contenido />
      <ContenedorColumnas />
      <PieDePagina />
    </div>
  );
}

export default App;

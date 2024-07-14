import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import Piscinas from "./components/compoCatego/Piscinas";
import Cabañas from "./components/compoCatego/Cabañas";
import Minicasas from "./components/compoCatego/Minicasas";
import Frente from "./components/compoCatego/Frente-al-lago";
import Crea from "./pages/paginasico/Crea";
import Quedate from "./pages/paginasico/Quedate-en-la-casa";
import Noche from "./pages/paginasico/Noche-vip";
import Mansionx from "./pages/paginasico/Mansion-x";
import Piscina1 from "./pages/paginasico/piscina1";
import Piscina2 from "./pages/paginasico/piscina2";
import Pago from "./pages/pago";
import Popuppago from "./components/popup-pago";




function App() {
  return (
    <>
      <BrowserRouter>       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/piscinas" element={<Piscinas />} />
          <Route path="/cabañas" element={<Cabañas />} />
          <Route path="/minicasas" element={<Minicasas />} />
          <Route path="/frente" element={<Frente />} />
          <Route path="/crea" element={<Crea />} />
          <Route path="/quedate" element={<Quedate />} />
          <Route path="/noche" element={<Noche />} />
          <Route path="/mansionx" element={<Mansionx />} />
          <Route path="/piscina1" element={<Piscina1 />} />
          <Route path="/piscina2" element={<Piscina2 />} />
          <Route path="/pago" element={<Pago/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

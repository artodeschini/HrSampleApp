import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaEmpregado from "./empregados/ListaEmpregado";
import Navegacao from "./shared/Navegacao";
import GerenciarEmpregado from "./empregados/GerenciarEmpregado";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navegacao/>
        <Routes>
          <Route exact path='/' element={<ListaEmpregado/>}></Route>
          <Route exact path='/adicionar' element={<GerenciarEmpregado/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

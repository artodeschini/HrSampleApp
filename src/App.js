import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaEmpregado from "./empregados/ListaEmpregado";
import Navegacao from "./shared/Navegacao";
import SalvarEmpregado from "./empregados/SalvarEmpregado";
import EditarEmpregado from "./empregados/EditarEmpregado";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navegacao/>
        <Routes>
          <Route exact path='/' element={<ListaEmpregado/>}></Route>
          <Route exact path='/adicionar' element={<SalvarEmpregado/>}></Route>
          <Route exact path='/editar/:id' element={<EditarEmpregado/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

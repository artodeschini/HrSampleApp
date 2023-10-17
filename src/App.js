import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaEmpregado from "./empregados/ListaEmpregado";
import Navegacao from "./shared/Navegacao";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navegacao/>
        <Routes>
          <Route exact path='/' element={<ListaEmpregado/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

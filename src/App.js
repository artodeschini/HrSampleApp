import ListaEmpregado from "./empregados/ListaEmpregado";
import Navegacao from "./shared/Navegacao";

function App() {
  return (
    <div className="container">
      <Navegacao></Navegacao>
      <ListaEmpregado></ListaEmpregado>
    </div>
  );
}

export default App;

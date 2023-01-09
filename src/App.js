import Navbar from "./componentes/Navbar/Navbar"
import PainelCentral from "./componentes/PainelCentral/PainelCentral";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <main>
          <PainelCentral></PainelCentral>
      </main>
    </div>
  );
}

export default App;

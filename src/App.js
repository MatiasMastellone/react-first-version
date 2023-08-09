import "./components/NavBar"
import "./components/ItemListContainer"
import './App.css';
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Hola querido usuario"}/>
    </div>
  );
}

export default App;

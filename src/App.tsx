import "./App.css";
import {Atom} from "./components/Atom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header className="App-header">
        <Navbar />
      </header>
      <main>
      <Atom />
      </main>
    </>
  );
}

export default App;

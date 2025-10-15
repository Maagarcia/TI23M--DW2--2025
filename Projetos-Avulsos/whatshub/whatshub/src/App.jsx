import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Gerador from "./components/Gerador";
import Agenda from "./components/Agenda";

function App() {
  const [numeroSelect, setNumeroSelect] = useState('');

  return (
    <div className="container">
      <Gerador setNumeroSelect={setNumeroSelect} numeroSelect={numeroSelect} />
      <Agenda setNumeroSelect={setNumeroSelect} />
    </div>
  );
}

export default App;

import "./App.css";
import Particles from "react-tsparticles";

import particlesOptions from "./particles.json";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Particles options={particlesOptions} />
    </div>
  );
}

export default App;

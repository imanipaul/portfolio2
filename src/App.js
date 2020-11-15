import "./App.css";
import Particles from "react-tsparticles";

import particlesOptions from "./particles.json";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import ClientWork from "./components/ClientWork";
import Blank from "./components/Blank";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
    </div>
  );
}

export default App;

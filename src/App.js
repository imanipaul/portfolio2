import "./App.css";
import Particles from "react-tsparticles";

import particlesOptions from "./particles.json";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content" id="repulse-div">
        <h1>
          Hi, I am <span>Imani Paul</span>.
        </h1>
        <p>
          I'm a software engineer, web developer, and creative problem solver.
        </p>
      </div>

      <Particles options={particlesOptions} />
    </div>
  );
}

export default App;

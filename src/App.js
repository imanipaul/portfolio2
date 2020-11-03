import "./App.css";
import Particles from "react-tsparticles";

import particlesOptions from "./particles.json";

function App() {
  return (
    <div className="App">
      <h1>Portfolio Update</h1>
      <p>
        This is some information about my portfolio. Click here to do something
        important. Idk, we'll see what happens
      </p>
      <Particles options={particlesOptions} />
    </div>
  );
}

export default App;

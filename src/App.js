import "./App.css";
import Particles from "react-tsparticles";

import particlesOptions from "./particles.json";

function App() {
  return (
    <div className="App">
      Portfolio Update
      <Particles options={particlesOptions} />
    </div>
  );
}

export default App;

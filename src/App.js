import "./App.css";

import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import ClientWork from "./components/ClientWork";
import Blank from "./components/Blank";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <ClientWork />
      <Projects />
    </div>
  );
}

export default App;

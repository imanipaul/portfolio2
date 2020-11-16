import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import ClientWork from "./components/ClientWork";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <ClientWork />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

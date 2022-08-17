import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import { useEffect, useState } from "react";

function App() {
  const [tab, setTab] = useState("Home");

  const handleScroll = () => {
    const position = window.scrollY;
    if (position < document.body.scrollHeight / 3.0 - 150) {
      setTab("Home");
    }
    else if (position < 2.0 * document.body.scrollHeight / 3.0 - 500) {
      setTab("Skills");
    }
    else {
      setTab("Projects");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="App">
      <Navbar tabCallback={(pageName) => {
        setTab(pageName);
      }} selected={tab} />
      <Home />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;

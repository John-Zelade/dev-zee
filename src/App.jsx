import { useState } from "react";
import "./App.css";

import Loader from "./components/utilities/loader";
import NavigationBar from "./components/navigation.bar";

import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Works from "./components/works";

function App() {
  const [loading, setLoading] = useState(false);
  const [darkmode, setDarkMode] = useState(false);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  if (loading) {
    return (
      <div className="loader-container d-flex justify-content-center align-items-center">
        <Loader />
      </div>
    );
  }
  return (
    <>
      <div className={darkmode ? "active-dark-mode" : "bg-body-secondary"}>
        <div className="fixed-top">
          <NavigationBar setDarkMode={setDarkMode} darkmode={darkmode} />
        </div>
        <div>
          <Home />
          <About />
          <Skills />
          <Works />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;

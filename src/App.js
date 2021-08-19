import React from "react";
import HomeSection from "./Components/HomeSection";
import MobileNavBar from "./Components/MobileNavBar";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Quote from "./Components/Quote";
import Skills from "./Components/Skills";
import "./CSS/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MobileNavBar />
      <HomeSection />
      <Quote />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;

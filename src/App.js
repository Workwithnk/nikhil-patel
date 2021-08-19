import React from "react";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

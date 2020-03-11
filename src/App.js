import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import GoTop from "./components/Button/GoTop";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Projects />
      <Footer />
      <GoTop />
    </div>
  );
}

export default App;

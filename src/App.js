import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Header/>
        <About/>
        {/* <Projects/> */}
        {/* <Footer/> */}
    </div>
  );
}

export default App;

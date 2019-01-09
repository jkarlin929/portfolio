import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import Topnav from './components/Topnav';
import Projects from './components/Projects';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topnav />
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;

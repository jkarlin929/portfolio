import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Topnav from './components/Topnav';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Topnav />
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;

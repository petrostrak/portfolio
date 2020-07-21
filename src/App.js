import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Footer />
      <script src="./app.js"></script>
    </div>
  );
}

export default App;

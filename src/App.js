import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <About />
      <section id="footer">
        <div className="footer container">
          <div className="brand"><h1><span>P</span>etros <span>T</span>rakadas</h1></div>
          <h2>You can reach me at..</h2>
          <div className="social-icon">
            <div className="social-item">
              <a href="https://www.linkedin.com/in/petrostrak/" target="_blank"><img src="https://img.icons8.com/bubbles/100/000000/linkedin.png" alt="" /></a>
            </div>
            <div className="social-item">
              <a href="https://github.com/petrostrak" target="_blank"><img src="https://img.icons8.com/bubbles/100/000000/github.png" alt="" /></a>
            </div>
            <div className="social-item">
              <a href="mailto:pit.trak@gmail.com"><img src="https://img.icons8.com/bubbles/100/000000/email.png" alt="" /></a>
            </div>
          </div>
          <p>Copyright © 2020 Petros. All rights reserved</p>
        </div>
      </section>
      <script src="./app.js"></script>
    </div>
  );
}

export default App;

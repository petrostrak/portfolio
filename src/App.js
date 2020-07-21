import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import img2 from './img/me-newspaper.jpg';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Projects />
      
      <section id="about">
        <div className="about container">
          <div className="col-left">
            <div className="about-img">
              <img src={img2} alt="img" />
            </div>
          </div>
          <div className="col-right">
            <h1 className="section-title">About <span>me</span></h1>
            <h2>Entry-level full-stack developer</h2>
            <p className="aboutme-text">I am a hardworking and ambitious individual with a great passion for technology and especially programming. Currently I am changing my career to become a Software Developer. I enjoy being challenged and engaged with projects that require me to work outside my comfort and knowledge set, as continuing to learn new technologies is crucial to me. </p>
            <a href="https://drive.google.com/file/d/1bH7NnfS9IZTbb4lp3yyeWR1BmsOEQJbY/view?usp=sharing" download="https://drive.google.com/file/d/1bH7NnfS9IZTbb4lp3yyeWR1BmsOEQJbY/view?usp=sharing" target="_blank" className="cta">Download Resume</a>
          </div>
        </div>
      </section>

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

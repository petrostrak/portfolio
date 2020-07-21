import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import img2 from './img/me-newspaper.jpg';
import project1 from './img/project-1.png';
import project2 from './img/project-2.png';
import project3 from './img/project-3.png';
import project4 from './img/project-4.png';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <section id="services">
        <div className="services container">
          <div className="service-top">
            <h1 className="section-title">Sk<span>i</span>lls</h1>
            <p>My technical skills have been developed during the 500 hours of intensive training in Software Development, organized by
            PeopleCert and HEPIS. Developed under the academic supervision of the Athens University of Economics and Business. </p>
          </div>
          <div className="service-bottom">
            <div className="service-item service-item__1">
              <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="" /></div>
              <h2>Java</h2>
              <div>
                <p>Spring Framework<br />Hibernate ORM<br />JPA</p>
              </div>
            </div>
            <div className="service-item service-item__2">
              <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="" /></div>
              <h2>JavaScript</h2>
              <div>
                <p>ECMAScript 6<br />React<br />AngularJs</p>
              </div>
            </div>
            <div className="service-item service-item__3">
              <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="" /></div>
              <h2>Web Design</h2>
              <div>
                <p>HTML5<br />SCSS<br />Bootstrap</p>
              </div>
            </div>
            <div className="service-item service-item__4">
              <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="" /></div>
              <h2>other</h2>
              <div>
                <p>MySQL<br />Docker<br />Linux</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="projects container">
          <div className="projects-header">
            <h1 className="section-title">Recent <span>Projects</span></h1>
          </div>
          <div className="all-projects">
            <div className="project-item">
              <div className="project-info">
                <h1><a href="https://react-project-no0.herokuapp.com" target="_blank">An introduction to React-js framework</a></h1>
                <h2>First introduction to React-js</h2>
                <p>This was my first project using React framework. It's a simple single-page application where you can type into an array a pastime and do some basic functions such as edit and/ or delete elements of the array. At the end, you can randomly pick an element of the array to appear on a pop-up window. Aside from HTML and JSX, SCSS is used for implementing the styles. The development of this app has been organised with webpack.</p>
              </div>
              <div className="project-img">
                <img src={project1} alt="img" />
              </div>
            </div>
            <div className="project-item">
              <div className="project-info">
                <h1><a href="https://react-project-no1.herokuapp.com/" target="_blank">React project</a></h1>
                <h2>Using Router Redux and Hooks</h2>
                <p>A single-page web-application using React framework with Router, Redux and Hooks. In this project I implemented google authentication for logging into the application and set up firebase for storing the data in online database. Aside from HTML and JSX, SCSS is used for implementing the styles. The development of this app has been organised with webpack.</p>
              </div>
              <div className="project-img">
                <img src={project2} alt="img" />
              </div>
            </div>
            <div className="project-item">
              <div className="project-info">
                <h1><a href="https://github.com/petrostrak/Spring-Boot-Token-based-Authentication-with-Spring-Security-JWT" target="_blank">Spring Boot application</a></h1>
                <h2>Supports Token based authentication</h2>
                <p>A Spring Boot application architecture with Spring Security that works with JSON web tokens. Spring Data JPA interact also with MySQL database. The front-end is structured with React-js framework, LocalStorage, React Router and Axios. The project (client-server-database) is bundled and running with Docker compose.</p>
              </div>
              <div className="project-img">
                <img src={project3} alt="img" />
              </div>
            </div>
            <div className="project-item">
              <div className="project-info">
                <h1><a href="https://github.com/petrostrak/airSense" target="_blank">AirSense</a></h1>
                <h2>Spring Boot application</h2>
                <p>AirSense is an air quality IoT sensors e-shop and data visualization service and my first collaborate work with Agile (SCRUM) methodology. It's structured with REST API architecture. The back-end is set up with Spring Boot, JPA and Hibernate while the front-end with React-js, Bootstrap and CSS. The application implements chat using Websockets, Paypal transactions and SMTP Mail service. Last but not least, a python script generates dummy data and store them to MySQL and Grafana analyse and visualize them on the application.</p>
              </div>
              <div className="project-img">
                <img src={project4} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>

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

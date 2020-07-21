import React from 'react';
import project1 from '../img/project-1.png';
import project2 from '../img/project-2.png';
import project3 from '../img/project-3.png';
import project4 from '../img/project-4.png';

const Projects = () => (
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

);

export default Projects;
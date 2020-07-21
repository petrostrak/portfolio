import React from 'react';
import img2 from '../img/me-newspaper.jpg';

const About = () => (
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
);

export default About;
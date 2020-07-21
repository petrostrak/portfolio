import React from 'react';

const Footer = () => (
    <section id="footer">
        <div className="footer container">
            <div className="brand"><h1><span>P</span>etros <span>T</span>rakadas</h1></div>
            <h2>You can reach me at..</h2>
            <div className="social-icon">
                <div className="social-item">
                    <a href="https://www.linkedin.com/in/petrostrak/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/bubbles/100/000000/linkedin.png" alt="" /></a>
                </div>
                <div className="social-item">
                    <a href="https://github.com/petrostrak" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/bubbles/100/000000/github.png" alt="" /></a>
                </div>
                <div className="social-item">
                    <a href="mailto:pit.trak@gmail.com"><img src="https://img.icons8.com/bubbles/100/000000/email.png" alt="" /></a>
                </div>
            </div>
            <p>Copyright © 2020 Petros. All rights reserved</p>
        </div>
    </section>
);

export default Footer;
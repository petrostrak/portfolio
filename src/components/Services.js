import React from 'react';

const Services = () => (
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
);

export default Services;
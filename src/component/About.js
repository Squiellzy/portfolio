import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import me from "../assets/img/about.jpg";
export const About = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoaded(true);
        }, 50);

        return () => clearTimeout(timeout);

    }, []); 

    return (
        <section className="about" id="about">
            <Container>
                <Row className={`justify-content-md-center ${loaded ? 'fadeIn' : ''}`}>
                    <Col xs={12} lg={12}>
                        <h2>About me</h2>
                    </Col>
                    <Col xs={12} md={6}>
                        <p className="about-text">
                            Hello, <b>I`m Vlad Yudenko, Frontend Developer,</b> who turning code to the incredible sites. I always strive to create a quality product, so I am constantly developing and learning. 
                            <br/><br/>
                            I've been studying Frontend Development since high school, and I am constantly enriching my knowledge on courses and at my university <b>Igor Sikorsky Kyiv Polytechnic Institute</b>.
                        </p>
                    </Col>
                    <Col xs={{ span: 8, offset: 2 }} sm={4} lg={{ span: 4, offset: 1 }}>
                        <img src={me} alt="me"/>
                    </Col>
                    <Col xs={12}>
                    <Marquee>
                        <div className="about-row">
                            React
                            JSON
                            JavaScript
                            TypeScript
                            Jest
                            CSS
                            Webpack
                            Ajax
                            HTML
                            Less
                            Tailwind
                            SQL
                            Bootstrap
                            Git
                            Redux
                            Sass
                            Scrum 
                            Kanban
                        </div>
                    </Marquee>
                    </Col>
                </Row>
            </Container>
            {/* <p>React</p>
                    <p>JSON</p>
                    <p>JavaScript</p>
                    <p>TypeScript</p>
                    <p>Jest</p>
                    <p>CSS</p>
                    <p>Webpack</p>
                    <p>Ajax</p>
                    <p>HTML</p>
                    <p>Less</p>
                    <p>Bootstrap</p>
                    <p>Git</p>
                    <p>Redux</p>
                    <p>Saas</p>
                    <p>Scrum and Kanban</p> */}
        </section>
    )
}
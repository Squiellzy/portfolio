import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";


export const Projects = () => {
    const projectsReact = [
        {
        title: "Game of Thrones",
        description: "Router, API, Reactstrap",
        imgUrl: "/img/game-of-throne.png",
        link:"https://gameofthrones-api.netlify.app"
        },
    ]
    const projectsJS = [
        {
        title: "Uklon",
        description: "Bootstrap, Sass, Gulp",
        imgUrl: "/img/uklon.png",
        link:"https://uklon.netlify.app/"
        },
        {
        title: "Food",
        description: "Modal, Calculator, Timer, Webpack",
        imgUrl: "/img/food-promo.png",
        link:"https://food-promo.netlify.app/"
        },
        {
        title: "Parallax",
        description: "Parallax Effect",
        imgUrl: "/img/parallax.png",
        link:"https://parallax-scrolling-helloween.netlify.app/"
        },
        {
        title: "Deer",
        description: "Login and Registration",
        imgUrl: "/img/logo-register.png",
        link:"https://login-registration-deer.netlify.app/"
        },
        {
        title: "Wordpress",
        description: "First Project",
        imgUrl: "/img/wordpress.png",
        link:"https://wordpress-intensive-online.netlify.app/"
        }
    ];
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Projects I made while learning Frontend and practicing with different instruments</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">React</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">HTML, CSS, JavaScript</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projectsReact.map((project, index) => {
                                                return(
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}/>
                                                )
                                            })
                                        }
                                        <h3>And of course this portfolio site is written with React and many other tools</h3>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projectsJS.map((project, index) => {
                                                return(
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
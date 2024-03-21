import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/linkedin.svg';
import navIcon2 from '../assets/img/github.svg';


export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6} className="text-center text-sm-start">
                        <h2 class="logo">Portfolio</h2>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                                <a href="https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D1%81%D0%BB%D0%B0%D0%B2-%D1%8E%D0%B4%D0%B5%D0%BD%D0%BA%D0%BE-0362ab2ab/"><img src={navIcon1} alt="LinkedIn"/></a>
                                <a href="https://github.com/Squiellzy"><img src={navIcon2} alt="GitHub"/></a>
                        </div>
                        <p>CopyRight 2024. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
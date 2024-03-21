import React, {useState, useEffect} from 'react';
import {Navbar, Container, Nav, Modal, Button} from "react-bootstrap";
import navIcon1 from '../assets/img/linkedin.svg';
import navIcon2 from '../assets/img/github.svg';

export const NavMenu = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [show, setShow] = useState(false); // Додали стан для відображення модального вікна

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const handleShow = () => {
        setShow(true); // При кліку на кнопку відображаємо модальне вікно
    }

    const handleClose = () => {
        setShow(false); // При закритті модального вікна ховаємо його
    }

    return ( 
        <>
            <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <h2 className="logo">Portfolio</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Project</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D1%81%D0%BB%D0%B0%D0%B2-%D1%8E%D0%B4%D0%B5%D0%BD%D0%BA%D0%BE-0362ab2ab/"><img src={navIcon1} alt="LinkedIn"/></a>
                                <a href="https://github.com/Squiellzy"><img src={navIcon2} alt="GitHub"/></a>
                            </div>
                            <button className="vvd" onClick={handleShow}><span>Let's Connect</span></button>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>My Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    My number: <a href='tel:+380954331836'>+380954331836</a><br/>
                    My LinkedIn: <a href='https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D1%81%D0%BB%D0%B0%D0%B2-%D1%8E%D0%B4%D0%B5%D0%BD%D0%BA%D0%BE-0362ab2ab/'>Владислав Юденко</a><br/>
                    My email: <a href='mailto:squiellzy@gmail.com'>squiellzy@gmail.com</a>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

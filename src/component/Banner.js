import { useState, useEffect  } from "react";
import { Col, Container, Row } from "react-bootstrap";



export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Frontend Developer", "JavaScript, React.js ..."];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random() * 100);
    const period = 2500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        
        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if( isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(150);
        }

    };
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={{order: 2, span: 12}} lg={{order: 1, span: 12}} xl={{ span: 8, offset: 2 }}>
                        <h1>{`Hi I'm Vlad`}<br/><span className="wrap">{text}</span></h1>
                    </Col>
                    <Col xs={{order: 1}} lg={{order: 2, span: 12}} xl={{ span: 8, offset: 2 }}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
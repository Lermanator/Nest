import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
    return (
        <Container fluid className="footercontain">
            <Row>
                <h5 className="contactrow">
                    Contact Us!
                </h5>
            </Row>
            <Row>
                <Col>
                    <p Style="text-align: end;"><a className = "imagelogos" href="https://www.instagram.com/interactclubbca/"><BsInstagram/></a></p>
                </Col>
                <Col className="justify-content-start">
                    <p Style="text-align: start;"><a className = "imagelogos" href="mailto:andchu24@bergen.org,arhsha24@bergen.org"><AiOutlineMail/></a></p>
                </Col>
            </Row>
        </Container>
    );
}
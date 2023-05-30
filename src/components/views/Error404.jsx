import React from 'react';
import imgError404 from "../../assets/imgError404.png"
import { Container, Row, Col, Button } from "react-bootstrap"
const Error404 = () => {
    return (
        <Container className='main'>
            <Row className='text-center mb-3'>
                <Col xs={12}>
                    <img src={imgError404} alt="imagen de error 404" className="imgError404" />
                </Col>
                <Col xs={12}>
                    <Button variant="primary" type="submit">
                        Volver al inicio
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Error404;
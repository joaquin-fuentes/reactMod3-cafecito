import React from 'react';
import imgError404 from "../assets/imgError404.png"
import { Row, Col, Button } from "react-bootstrap"
const Error404 = () => {
    return (
        <Row className='text-center mb-3'>
            <Col xs={12}>
                <img src={imgError404} alt="imagen de error 404" />
            </Col>
            <Col xs={12}>
                <Button variant="primary" type="submit">
                    Volver al inicio
                </Button>
            </Col>
        </Row>
    );
};

export default Error404;